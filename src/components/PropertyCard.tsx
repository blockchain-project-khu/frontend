
import { Link } from 'react-router-dom';
import { Property } from '../lib/types';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard = ({ property, featured = false }: PropertyCardProps) => {
  const { id, title, address, price, monthlyReturn, returnRate, completionRate, images } = property;
  
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);
  const formattedMonthlyReturn = new Intl.NumberFormat('ko-KR').format(monthlyReturn);
  
  return (
    <Link to={`/properties/${id}`} className="property-card block">
      <div className="relative">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-64 object-cover"
        />
        {featured && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            인기매물
          </div>
        )}
      </div>
      
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{address}</p>
        
        <div className="flex items-center mb-3">
          <div className="text-sm text-gray-600">모집 진행률</div>
          <div className="flex-1 mx-2">
            <div className="progress-bar bg-gray-200">
              <div
                className="progress-fill bg-blue-400"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
          </div>
          <div className="text-sm font-semibold">{completionRate}%</div>
        </div>
        
        <div className="flex justify-between mb-2">
          <div>
            <div className="text-sm text-gray-500">총 투자가</div>
            <div className="font-semibold">₩{formattedPrice}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">최소 투자금</div>
            <div className="font-semibold">₩{new Intl.NumberFormat('ko-KR').format(price * 0.05)}</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-green-500 font-semibold">
            예상 수익률 {returnRate}%
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            자세히 보기
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
