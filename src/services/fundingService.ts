
import axios from 'axios';
import { FundingRequestDto, FundingResponseDto, CreateFundingResponse, FundingStatus } from '../lib/api-types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const fundingService = {
  // 펀딩 생성
  createFunding: async (propertyId: number, fundingData: FundingRequestDto): Promise<CreateFundingResponse> => {
    const response = await axios.post(`${API_BASE_URL}/api/fundings/properties/${propertyId}`, fundingData);
    return response.data;
  },

  // 내 펀딩 목록 조회
  getMyFundings: async (status?: FundingStatus): Promise<FundingResponseDto[]> => {
    const params = status ? { status } : {};
    const response = await axios.get(`${API_BASE_URL}/api/fundings/me`, { params });
    return response.data;
  },

  // 특정 펀딩 상세 조회
  getFundingById: async (fundingId: number): Promise<FundingResponseDto> => {
    const response = await axios.get(`${API_BASE_URL}/api/fundings/${fundingId}`);
    return response.data;
  },

  // 특정 부동산의 펀딩 목록 조회
  getFundingsByProperty: async (propertyId: number, status?: FundingStatus): Promise<FundingResponseDto[]> => {
    const params = status ? { status } : {};
    const response = await axios.get(`${API_BASE_URL}/api/fundings/property/${propertyId}`, { params });
    return response.data;
  }
};
