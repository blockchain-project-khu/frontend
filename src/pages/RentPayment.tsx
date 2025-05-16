
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { rentalPayments } from '../data/mockData'; // Assuming rentalPayments is in mockData
import { Button } from '@/components/ui/button'; // Using shadcn Button for consistency if new buttons are needed, but will replicate existing style for now.
import { Link } from 'react-router-dom';

const RentPayment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center md:text-left">월세 납부</h1>
          
          <div className="bg-white shadow-sm rounded-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-6">임대료 납부 정보</h2>
            
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <img 
                  src="/lovable-uploads/f33cf435-ed2f-40fa-ba80-0f834d817d55.png" 
                  alt="Property" 
                  className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded mb-4 sm:mb-0"
                />
                <div className="sm:ml-4 text-center sm:text-left">
                  <h3 className="text-lg font-medium">용산 한남동 오피스텔</h3>
                  <p className="text-sm text-gray-600">서울특별시 용산구 한남동 34-56</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-yellow-800">
                    월세 납부는 매월 1일에 자동으로 청구됩니다. 전체이 납부될 경우 건물주 계좌에 입금됩니다.
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-1">월 임대료</div>
                <div className="text-3xl font-bold">₩2,300,000</div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors text-base font-medium">
                  지금 납부하기
                </button>
                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-md transition-colors text-base font-medium">
                  자동 연결하기
                </button>
              </div>
            </div>
            
            <div className="border-t pt-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">납부 이력</h3>
                {rentalPayments.length > 0 ? (
                    <div className="space-y-4">
                    {rentalPayments.map((payment) => (
                        <div key={payment.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium text-sm sm:text-base">2025년 {payment.date}</span>
                            </div>
                            <span className="font-medium text-green-600 text-sm sm:text-base">완료</span>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 mb-1">납부액</div>
                        <div className="font-semibold text-sm sm:text-base">₩{new Intl.NumberFormat('ko-KR').format(payment.amount)}</div>
                        </div>
                    ))}
                    </div>
                ) : (
                    <p className="text-gray-500">납부 이력이 없습니다.</p>
                )}
            </div>

            <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">계약 정보</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-gray-500">계약 주소</p>
                        <p className="font-medium">서울특별시 용산구 한남동 34-56</p>
                    </div>
                    
                    <div>
                        <p className="text-gray-500">계약 기간</p>
                        <p className="font-medium">2025년 1월 1일 ~ 2026년 12월 31일 (2년)</p>
                    </div>
                    
                    <div>
                        <p className="text-gray-500">월 임대료</p>
                        <p className="font-medium">₩2,300,000</p>
                    </div>
                    </div>
                </div>
                
                <div className="mt-6">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    자세한 계약서 보기
                    </button>
                </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RentPayment;

