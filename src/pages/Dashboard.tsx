
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { userPortfolio, properties, transactions, rentalPayments } from '../data/mockData';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');
  const [activeBuyerSection, setActiveBuyerSection] = useState<'overview' | 'investments' | 'transactions'>('overview');
  
  const { totalInvestment, monthlyIncome, averageReturn, ownedNFTs, investments } = userPortfolio;
  
  const formattedTotalInvestment = new Intl.NumberFormat('ko-KR').format(totalInvestment);
  const formattedMonthlyIncome = new Intl.NumberFormat('ko-KR').format(monthlyIncome);
  
  // Get property details for each investment
  const userInvestments = investments.map(investment => {
    const property = properties.find(p => p.id === investment.propertyId);
    return {
      ...investment,
      property
    };
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">마이페이지</h1>
          <p className="text-gray-600 mb-8">안녕하세요, 블록체인 귀하의 투자 현황을 확인하세요.</p>
          
          {/* Tabs */}
          <div className="bg-white rounded-full p-1 inline-flex mb-8 shadow-sm">
            <button
              onClick={() => setActiveTab('buyer')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'buyer'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              구매자
            </button>
            <button
              onClick={() => setActiveTab('seller')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'seller'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              판매자
            </button>
          </div>
          
          {activeTab === 'buyer' && (
            <div>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-md mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">총 투자액</p>
                      <p className="text-xl font-bold">₩{formattedTotalInvestment}</p>
                      <p className="text-xs text-gray-500">2개 부동산</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-md mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">월 수익</p>
                      <p className="text-xl font-bold">₩{formattedMonthlyIncome}</p>
                      <p className="text-xs text-gray-500">최근 지급일: 2023년 5월 1일</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-md mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">수익률</p>
                      <p className="text-xl font-bold text-green-500">4.8%</p>
                      <p className="text-xs text-green-500">+0.3% 지난달 대비</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-md mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">보유 NFT</p>
                      <p className="text-xl font-bold">3 NFT</p>
                      <p className="text-xs text-gray-500">총 15% 지분</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Buyer Sections */}
              <div className="bg-white shadow-sm rounded-lg mb-8">
                <div className="border-b">
                  <div className="flex overflow-x-auto">
                    <button
                      onClick={() => setActiveBuyerSection('overview')}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                        activeBuyerSection === 'overview'
                          ? 'border-b-2 border-blue-500 text-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      개요
                    </button>
                    <button
                      onClick={() => setActiveBuyerSection('investments')}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                        activeBuyerSection === 'investments'
                          ? 'border-b-2 border-blue-500 text-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      내 투자
                    </button>
                    <button
                      onClick={() => setActiveBuyerSection('transactions')}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                        activeBuyerSection === 'transactions'
                          ? 'border-b-2 border-blue-500 text-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      거래 내역
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  {activeBuyerSection === 'overview' && (
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <div className="bg-white border rounded-lg p-4 col-span-1">
                          <p className="text-sm text-gray-500">판매 중인 매물</p>
                          <p className="text-2xl font-bold">1</p>
                          <p className="text-xs text-gray-500">총 20% 지분</p>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-4 col-span-1">
                          <p className="text-sm text-gray-500">판매 금액</p>
                          <p className="text-2xl font-bold">₩184,000,000</p>
                          <p className="text-xs text-gray-500">1개 부동산</p>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-4 col-span-1">
                          <p className="text-sm text-gray-500">조회수</p>
                          <p className="text-2xl font-bold">156</p>
                          <p className="text-xs text-green-500">+24 지난주 대비</p>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-4 col-span-1">
                          <p className="text-sm text-gray-500">관심 고객</p>
                          <p className="text-2xl font-bold">8</p>
                          <p className="text-xs text-green-500">+3 지난주 대비</p>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-4">내 매물</h3>
                      <div className="mb-6">
                        <div className="bg-white border rounded-lg overflow-hidden">
                          <div className="md:flex">
                            <div className="md:w-1/4">
                              <img 
                                src="/lovable-uploads/df268322-948c-4fa4-b50e-5c3f119d717c.png" 
                                alt="Property" 
                                className="w-full h-48 md:h-full object-cover"
                              />
                            </div>
                            <div className="p-4 md:w-3/4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">판매중</span>
                                  <h4 className="text-lg font-semibold mb-1">송파 잠실동 아파트</h4>
                                  <p className="text-gray-600 text-sm mb-4">서울특별시 송파구 잠실동 45-67</p>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-gray-500">등록일</p>
                                  <p className="font-semibold">2025년 2월 20일</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">판매 지분</p>
                                  <p className="font-semibold">20%</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">판매가</p>
                                  <p className="font-semibold">₩184,000,000</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">총가</p>
                                  <p className="font-semibold">₩920,000,000</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center mt-4">
                                <span className="text-sm text-gray-500 flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  156 조회
                                </span>
                                <div className="ml-auto space-x-2">
                                  <Link to="#" className="text-blue-500 hover:bg-blue-50 px-4 py-2 rounded">
                                    상세 보기
                                  </Link>
                                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    판매 관리
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeBuyerSection === 'investments' && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4">내 투자</h3>
                      {userInvestments.map((investment) => (
                        <div key={investment.id} className="mb-4 border rounded-lg overflow-hidden">
                          <div className="md:flex">
                            <div className="md:w-1/4">
                              <img 
                                src={investment.property?.images[0]} 
                                alt={investment.property?.title} 
                                className="w-full h-48 md:h-full object-cover"
                              />
                            </div>
                            <div className="p-4 md:w-3/4">
                              {investment.property?.id === '1' && (
                                <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                                  모집 완료
                                </div>
                              )}
                              <h4 className="text-lg font-semibold mb-1">{investment.property?.title}</h4>
                              <p className="text-gray-600 text-sm mb-4">{investment.property?.address}</p>
                              
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-gray-500">내 지분</p>
                                  <p className="font-semibold">10%</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">월 수익</p>
                                  <p className="font-semibold text-green-500">₩{new Intl.NumberFormat('ko-KR').format(investment.monthlyReturn)}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">투자액</p>
                                  <p className="font-semibold">₩{new Intl.NumberFormat('ko-KR').format(investment.amount)}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">투자일</p>
                                  <p className="font-semibold">{investment.purchaseDate.toLocaleDateString()}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center text-sm">
                                <span className="text-gray-500">
                                  다음 수익 지급일
                                </span>
                                <span className="ml-2 bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                  2025년 5월 1일
                                </span>
                                <div className="ml-auto">
                                  <Link 
                                    to={`/properties/${investment.propertyId}`}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                  >
                                    자세히 보기
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeBuyerSection === 'transactions' && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4">거래 내역</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">날짜</th>
                              <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">설명</th>
                              <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">유형</th>
                              <th className="py-2 px-4 text-right text-sm font-medium text-gray-500">금액</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {transactions.map((transaction) => (
                              <tr key={transaction.id}>
                                <td className="py-3 px-4 text-sm">{transaction.date}</td>
                                <td className="py-3 px-4 text-sm">{transaction.description}</td>
                                <td className="py-3 px-4 text-sm">
                                  <span className={`inline-block rounded-full px-2 py-1 text-xs ${
                                    transaction.type === 'income'
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {transaction.type === 'income' ? '수입' : '지출'}
                                  </span>
                                </td>
                                <td className={`py-3 px-4 text-sm text-right font-medium ${
                                  transaction.type === 'income'
                                    ? 'text-green-600'
                                    : 'text-blue-600'
                                }`}>
                                  {transaction.type === 'income' ? '+' : '-'}₩{new Intl.NumberFormat('ko-KR').format(transaction.amount)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'seller' && (
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6">월세 납부</h3>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="/lovable-uploads/f33cf435-ed2f-40fa-ba80-0f834d817d55.png" 
                    alt="Property" 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium">용산 한남동 오피스텔</h4>
                    <p className="text-sm text-gray-600">서울특별시 용산구 한남동 34-56</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-yellow-800">
                      월세 납부는 매월 1일에 자동으로 청구됩니다. 전체이 납부될 경우 건물주 계좌에 입금됩니다.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">월 임대료</div>
                  <div className="text-2xl font-bold">₩2,300,000</div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors mb-4">
                  지금 납부하기
                </button>
                
                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-md transition-colors">
                  자동 연결하기
                </button>
              </div>
              
              <h3 className="text-lg font-semibold mt-8 mb-4">납부 이력</h3>
              <div className="space-y-4">
                {rentalPayments.map((payment) => (
                  <div key={payment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">2025년 {payment.date}</span>
                      </div>
                      <span className="font-medium text-green-600">완료</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">납부액</div>
                    <div className="font-semibold">₩{new Intl.NumberFormat('ko-KR').format(payment.amount)}</div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold mt-8 mb-4">계약 정보</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">계약 주소</p>
                    <p className="font-medium">서울특별시 용산구 한남동 34-56</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">계약 기간</p>
                    <p className="font-medium">2025년 1월 1일 ~ 2026년 12월 31일 (2년)</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">월 임대료</p>
                    <p className="font-medium">₩2,300,000</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="text-blue-600 hover:text-blue-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  자세한 계약서 보기
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
