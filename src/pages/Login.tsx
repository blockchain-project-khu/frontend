import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Navbar from '@/components/Navbar';
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", 
        { username, password }, 
        { withCredentials: true }
      );

      const accessToken = response.headers["access"];
      if (!accessToken) {
        throw new Error("Access Token이 응답 헤더에 없음");
      }
      
      localStorage.setItem('accessToken', accessToken);
      
      // AuthContext에 사용자 정보 저장
      login({ username, password });
      
      toast({
        title: "로그인 성공",
        description: "메인 페이지로 이동합니다.",
      });
      
      navigate("/");
    } catch (error) {
      toast({
        title: "로그인 실패",
        description: "아이디 또는 비밀번호가 일치하지 않습니다.",
        variant: "destructive",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500 text-white p-3 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">로그인</h2>
          <p className="text-center text-gray-600 mb-6">BlockEstate에 오신 것을 환영합니다</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">아이디</label>
              <Input
                id="username"
                type="text"
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full flex items-center justify-center">
              <LogIn className="mr-2 h-4 w-4" /> 로그인
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            아직 계정이 없으신가요?{' '}
            <Link to="/register" className="font-medium text-blue-500 hover:text-blue-600">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;