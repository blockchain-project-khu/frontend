
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className="text-xl font-bold">BlockEstate</span>
        </Link>
        
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-md mx-4">
          <Search className="h-5 w-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="검색..."
            className="bg-transparent border-none focus:outline-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/properties" className="text-gray-800 hover:text-blue-600 transition-colors">
            매물
          </Link>
          <Link to="/dashboard" className="text-gray-800 hover:text-blue-600 transition-colors">
            마이페이지
          </Link>
          <Link to="/login" className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-full transition-colors">
            로그인
          </Link>
          <div className="bg-blue-500 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
