
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { properties } from '../data/mockData';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'info' | 'details' | 'docs'>('info');
  const [selectedInvestment, setSelectedInvestment] = useState<number>(5);
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">매물을 찾을 수 없습니다</h1>
          <Link to="/properties" className="text-blue-500 hover:text-blue-700">
            매물 목록으로 돌아가기
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { 
    title, address, price, monthlyReturn, returnRate, completionRate, 
    images, area, constructionYear, description, type
  } = property;
  
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);
  const investmentAmount = (price * selectedInvestment) / 100;
  const formattedInvestmentAmount = new Intl.NumberFormat('ko-KR').format(investmentAmount);
  const estimatedMonthlyReturn = (monthlyReturn * selectedInvestment) / 100;
  const formattedEstimatedMonthlyReturn = new Intl.NumberFormat('ko-KR').format(estimatedMonthlyReturn);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Property Images */}
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1">
              <img 
                src={images[0]} 
                alt={title} 
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="flex mt-4 space-x-4 overflow-x-auto py-2">
                {images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`${title} - ${index}`} 
                    className="h-24 w-36 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Property Info */}
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p className="text-gray-600 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {address}
              </p>
              
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  <button 
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'info' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    onClick={() => setActiveTab('info')}
                  >
                    기본 정보
                  </button>
                  <button 
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'details' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    onClick={() => setActiveTab('details')}
                  >
                    투자 정보
                  </button>
                  <button 
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'docs' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    onClick={() => setActiveTab('docs')}
                  >
                    시설 정보
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'info' && (
                <div className="space-y-6">
                  <p className="text-gray-700">{description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-gray-500 text-sm mb-1">건물 유형</div>
                      <div className="font-semibold">
                        {type === 'officetel' && '오피스텔'}
                        {type === 'apartment' && '아파트'}
                        {type === 'villa' && '빌라'}
                        {type === 'house' && '주택'}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-gray-500 text-sm mb-1">준공연도</div>
                      <div className="font-semibold">{constructionYear}년</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-gray-500 text-sm mb-1">면적</div>
                      <div className="font-semibold">{area}㎡</div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'details' && (
                <div className="space-y-6">
                  <p className="text-gray-700 mb-4">
                    이 부동산에 투자하면 매월 안정적인 임대 수익을 기대할 수 있습니다. 투자 금액에 비례하여 수익이 분배됩니다.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-gray-500 text-sm mb-1">총 투자금액</div>
                      <div className="font-semibold">₩{formattedPrice}</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-gray-500 text-sm mb-1">예상 월 수익</div>
                      <div className="font-semibold">₩{new Intl.NumberFormat('ko-KR').format(monthlyReturn)}</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-gray-500 text-sm mb-1">예상 수익률</div>
                      <div className="font-semibold text-green-500">{returnRate}%</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="text-gray-500 text-sm mb-1">모집 현황</div>
                      <div className="flex items-center">
                        <div className="flex-1 mr-4">
                          <div className="progress-bar bg-gray-200">
                            <div
                              className="progress-fill bg-blue-400"
                              style={{ width: `${completionRate}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="font-semibold">{completionRate}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'docs' && (
                <div className="space-y-6">
                  <p className="text-gray-700 mb-4">
                    이 부동산과 관련된 법적 문서 및 증명서 정보입니다.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-blue-800">
                        모든 부동산 관련 서류는 전문가의 검증을 거쳤으며, 블록체인에 기록되어 위변조가 불가능합니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>등기부등본</span>
                    </div>
                    
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>건축물대장</span>
                    </div>
                    
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>감정평가서</span>
                    </div>
                    
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>임대차계약서</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Similar Properties */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">비슷한 매물</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {properties
                    .filter(p => p.id !== id && p.type === type)
                    .slice(0, 3)
                    .map((property) => (
                      <Link key={property.id} to={`/properties/${property.id}`} className="group">
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <img 
                            src={property.images[0]} 
                            alt={property.title} 
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-3">
                            <h4 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">{property.title}</h4>
                            <p className="text-sm text-gray-500">{property.address}</p>
                            <div className="mt-2 flex justify-between">
                              <div className="text-sm">
                                투자가 <span className="text-gray-800 font-medium">₩{new Intl.NumberFormat('ko-KR').format(property.price)}</span>
                              </div>
                              <div className="text-green-500 text-sm">
                                수익률 <span className="font-medium">{property.returnRate}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Investment Calculator */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-4">투자 계산기</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <div className="text-sm text-gray-600">투자 지분 선택 (5% 단위)</div>
                    <div className="font-medium">{selectedInvestment}%</div>
                  </div>
                  <div className="flex space-x-2">
                    {[5, 10, 15, 20].map((percent) => (
                      <button
                        key={percent}
                        onClick={() => setSelectedInvestment(percent)}
                        className={`flex-1 py-2 rounded-md text-sm transition-colors ${
                          selectedInvestment === percent
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {percent}%
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">투자 금액</div>
                  <div className="text-2xl font-bold">₩{formattedInvestmentAmount}</div>
                </div>
                
                <div className="mb-8">
                  <div className="text-sm text-gray-600 mb-2">예상 월 수익</div>
                  <div className="text-xl font-bold text-green-500">₩{formattedEstimatedMonthlyReturn}</div>
                </div>
                
                <div className="mb-8">
                  <div className="text-sm text-gray-600 mb-2">예상 연간 수익률</div>
                  <div className="text-xl font-bold text-green-500">{returnRate}%</div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors mb-4">
                  지금 투자하기
                </button>
                
                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-md transition-colors">
                  투자 문의하기
                </button>
                
                <div className="mt-6 text-xs text-gray-500">
                  <p>투자 전 부동산 정보와 계약 내용을 꼼꼼히 확인하세요. 전문가 상담을 통해 상세한 정보를 얻을 수 있습니다.</p>
                  <p className="mt-2">투자자가 구매한 지분은 NFT가 발행됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
