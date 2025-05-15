import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from "axios";
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAxiosWithAuth = () => {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8080";
  const interceptorRegistered = useRef(false);

  const axiosInstanceRef = useRef<AxiosInstance>(
    axios.create({
      baseURL,
      timeout: 5000,
    })
  );

  const axiosInstance = axiosInstanceRef.current;

  useEffect(() => {
    if (interceptorRegistered.current) return;
    interceptorRegistered.current = true;

    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          config.headers.access = accessToken;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && originalRequest && !originalRequest.headers._retry) {
          originalRequest.headers._retry = true;

          try {
            const response = await axios.post(`${baseURL}/api/reissue`,
              {},
              {
                withCredentials: true,
                headers: {
                  access: localStorage.getItem("accessToken"),
                },
              }
            );

            const newAccessToken = response.headers["access"];
            localStorage.setItem("accessToken", newAccessToken);

            if (originalRequest.headers) {
              originalRequest.headers.access = newAccessToken;
            }
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            localStorage.removeItem("accessToken");
            navigate("/login");
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, baseURL, axiosInstance]);

  return axiosInstance;
};