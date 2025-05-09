
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import { properties } from '../data/mockData';
import { Property } from '../lib/types';

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filterType, setFilterType] = useState<string | null>(null);
  
  useEffect(() => {
    let result = properties;
    
    // Filter by search query
    if (searchQuery) {
      result = result.filter(property => 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by type
    if (filterType) {
      result = result.filter(property => property.type === filterType);
    }
    
    setFilteredProperties(result);
  }, [searchQuery, filterType]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">부동산 매물</h1>
          <p className="text-gray-600 mb-8">분할 소유권을 통해 부동산 투자에 참여할 수 있는 매물들을 확인하세요.</p>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1">
                <Search className="h-5 w-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="주소, 지역명으로 검색"
                  className="bg-transparent border-none focus:outline-none w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-full md:w-auto">
                검색
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors flex items-center justify-center w-full md:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                필터
              </button>
            </div>
          </div>
          
          {/* Property Type Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button 
              className={`px-4 py-2 rounded-full ${filterType === null ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors`}
              onClick={() => setFilterType(null)}
            >
              전체
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filterType === 'officetel' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors`}
              onClick={() => setFilterType('officetel')}
            >
              오피스텔
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filterType === 'apartment' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors`}
              onClick={() => setFilterType('apartment')}
            >
              아파트
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filterType === 'villa' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors`}
              onClick={() => setFilterType('villa')}
            >
              주택
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filterType === 'house' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors`}
              onClick={() => setFilterType('house')}
            >
              상가
            </button>
          </div>
          
          {/* Properties List */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="text-xl text-gray-600">검색 결과가 없습니다.</p>
              <p className="text-gray-500">다른 검색어나 필터를 사용해 보세요.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
