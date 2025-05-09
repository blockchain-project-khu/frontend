
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ListProperty = () => {
  const [images, setImages] = useState<FileList | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [returnRate, setReturnRate] = useState<number>(5);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(e.target.files);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic would go here
    alert('매물이 성공적으로 등록되었습니다!');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">매물 등록</h1>
          <p className="text-gray-600 mb-8">부동산의 정보를 입력하여 자신을 판매하세요.</p>
          
          <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">기본 정보</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">매물 제목</label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="예: 강남 역삼동 오피스텔"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">매물 유형</label>
                  <select
                    id="type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">선택하세요</option>
                    <option value="officetel">오피스텔</option>
                    <option value="apartment">아파트</option>
                    <option value="villa">빌라</option>
                    <option value="house">주택</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">주소</label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="예: 서울특별시 강남구 역삼동 123-45"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">면적 (㎡)</label>
                  <input
                    type="number"
                    id="area"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="예: 59.5"
                    min="1"
                    step="0.1"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="constructionYear" className="block text-sm font-medium text-gray-700 mb-1">준공년도</label>
                  <input
                    type="number"
                    id="constructionYear"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="예: 2020"
                    min="1900"
                    max="2099"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">매매가 (원)</label>
                  <input
                    type="number"
                    id="price"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="예: 450000000"
                    min="1"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">매물 설명</label>
                <textarea
                  id="description"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="매물에 대한 자세한 설명을 적어주세요."
                  required
                ></textarea>
              </div>
              
              <h2 className="text-xl font-semibold mb-6 pt-4">가격 정보</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">판매 지분 (%)</label>
                  <div className="flex space-x-2">
                    {[5, 10, 15, 20].map((percent) => (
                      <button
                        key={percent}
                        type="button"
                        onClick={() => setReturnRate(percent)}
                        className={`flex-1 py-2 rounded-md text-sm transition-colors ${
                          returnRate === percent
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {percent}%
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">선택한 지분: {returnRate}%</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">지분 판매가</label>
                  <p className="text-2xl font-bold text-blue-600">
                    ₩{new Intl.NumberFormat('ko-KR').format((price * returnRate) / 100)}
                  </p>
                  <p className="text-sm text-gray-500">총 가격의 {returnRate}%</p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-6 pt-4">이미지 업로드</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">이미지를 여기에 드래그하거나 클릭하여 업로드하세요</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">최대 5MB (JPG, PNG)</p>
                  <input
                    type="file"
                    id="images"
                    className="hidden"
                    accept="image/jpeg, image/png"
                    multiple
                    onChange={handleImageChange}
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById('images')?.click()}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    파일 선택
                  </button>
                </div>
                {images && (
                  <p className="mt-2 text-sm text-gray-600">
                    선택된 파일: {images.length}개
                  </p>
                )}
              </div>
              
              <h2 className="text-xl font-semibold mb-6 pt-4">시설 정보</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">시설 정보</label>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-elevator"
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="feature-elevator" className="ml-2 text-sm text-gray-700">
                      엘리베이터
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-parking"
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="feature-parking" className="ml-2 text-sm text-gray-700">
                      주차장
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="feature-security"
                      className="w-4 h-4 text-blue-600"
                    />
                    <label htmlFor="feature-security" className="ml-2 text-sm text-gray-700">
                      보안/경비
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex justify-end space-x-4">
                  <Link to="/properties" className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    취소
                  </Link>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    매물 등록하기
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ListProperty;
