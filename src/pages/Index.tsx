import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import { properties } from '../data/mockData';

const Index = () => {
  const featuredProperties = properties.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-hero-pattern text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-sm font-semibold mb-6">
            블록체인 기반 부동산 투자 플랫폼
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            블록체인 기술로 <span className="text-blue-300">함께</span> <span className="text-blue-200">소유</span>하는<br />부동산
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            단 5%부터 부동산 투자를 시작할 수 있습니다.<br />
            NFT로 증명되는 소유권, 투명한 수익 분배가 가능합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/properties" className="btn-primary">
              매물 둘러보기
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <button className="btn-outline bg-white">
              서비스 소개
            </button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">분할 소유권</h3>
              <p className="text-gray-600">
                5% 단위로 부동산에 투자하고 실제 소유권을 가질 수 있습니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">월세 수익 분배</h3>
              <p className="text-gray-600">
                보유 지분에 따라 월세 수익이 자동으로 분배됩니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">안전한 거래</h3>
              <p className="text-gray-600">
                블록체인 기술로 안전하고 투명한 거래가 보장됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Properties */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">특별한 매물</h2>
            <p className="text-xl text-gray-600">
              부동산 소유권을 통해 부동산 투자에 참여할 수 있는 매물들을 확인하세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} featured={true} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/properties" className="btn-primary inline-flex">
              모든 매물 보기
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">투자 절차</h2>
            <p className="text-xl text-gray-600">
              블록체인을 통한 간편한 부동산 투자 방법
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">회원가입</h3>
              <p className="text-gray-600">
                간단한 이메일 인증으로 회원가입을 완료합니다.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">매물 선택</h3>
              <p className="text-gray-600">
                원하는 투자 매물을 찾아 상세 정보를 확인합니다.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-blue-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">투자하기</h3>
              <p className="text-gray-600">
                원하는 금액만큼 투자하고 NFT로 소유권을 증명받습니다.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-blue-600 text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">수익 수령</h3>
              <p className="text-gray-600">
                매월 임대료 수익을 자동으로 분배받습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 부동산 투자를 시작하세요</h2>
          <p className="text-xl mb-8">
            BlockEstate와 함께라면 누구나 쉽게 부동산에 투자하고<br />
            안정적인 수익을 창출할 수 있습니다.
          </p>
          <Link to="/properties" className="btn-primary inline-flex bg-white text-blue-900 hover:bg-gray-100">
            매물 둘러보기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
