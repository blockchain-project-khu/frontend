
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fundingService } from '../services/fundingService';
import { properties } from '../data/mockData';
import { FundingStatus } from '../lib/api-types';

const FundingDetail = () => {
  const { fundingId } = useParams<{ fundingId: string }>();

  const { data: funding, isLoading, error } = useQuery({
    queryKey: ['funding', fundingId],
    queryFn: () => fundingService.getFundingById(Number(fundingId)),
    enabled: !!fundingId
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">펀딩 정보를 불러오는 중...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !funding) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">펀딩 정보를 찾을 수 없습니다</h1>
            <Link to="/dashboard" className="text-blue-500 hover:text-blue-700">
              대시보드로 돌아가기
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const property = properties.find(p => p.id === funding.propertyId.toString());

  const getStatusText = (status: FundingStatus) => {
    switch (status) {
      case FundingStatus.PENDING: return '대기중';
      case FundingStatus.APPROVED: return '승인됨';
      case FundingStatus.REJECTED: return '거절됨';
      case FundingStatus.COMPLETED: return '완료됨';
      default: return status;
    }
  };

  const getStatusColor = (status: FundingStatus) => {
    switch (status) {
      case FundingStatus.PENDING: return 'bg-yellow-100 text-yellow-800';
      case FundingStatus.APPROVED: return 'bg-green-100 text-green-800';
      case FundingStatus.REJECTED: return 'bg-red-100 text-red-800';
      case FundingStatus.COMPLETED: return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link to="/dashboard" className="text-blue-500 hover:text-blue-700 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                대시보드로 돌아가기
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">펀딩 상세 정보</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(funding.status)}`}>
                  {getStatusText(funding.status)}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-lg font-semibold mb-4">펀딩 정보</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">펀딩 ID</p>
                      <p className="font-medium">{funding.fundingId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">투자 금액</p>
                      <p className="font-medium text-lg">₩{new Intl.NumberFormat('ko-KR').format(funding.amount)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">상태</p>
                      <p className="font-medium">{getStatusText(funding.status)}</p>
                    </div>
                  </div>
                </div>

                {property && (
                  <div>
                    <h2 className="text-lg font-semibold mb-4">부동산 정보</h2>
                    <div className="border rounded-lg overflow-hidden">
                      <img 
                        src={property.images[0]} 
                        alt={property.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{property.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{property.address}</p>
                        <Link 
                          to={`/properties/${property.id}`}
                          className="text-blue-500 hover:text-blue-700 text-sm"
                        >
                          매물 상세보기 →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FundingDetail;
