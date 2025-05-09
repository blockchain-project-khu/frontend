
import { Property, UserPortfolio, Transaction } from '../lib/types';

// Mock Property Data
export const properties: Property[] = [
  {
    id: '1',
    title: '강남 역삼동 오피스텔',
    address: '서울특별시 강남구 역삼동 123-45',
    city: '서울특별시',
    district: '강남구',
    propertyNumber: '역삼동 123-45',
    price: 450000000,
    monthlyReturn: 22500000,
    returnRate: 4.8,
    completionRate: 65,
    type: 'officetel',
    images: [
      '/lovable-uploads/65c3bc8b-12cd-4b6f-b6eb-de3819df57c1.png',
      '/lovable-uploads/65c3bc8b-12cd-4b6f-b6eb-de3819df57c1.png'
    ],
    area: 59.5,
    constructionYear: 2020,
    description: '역삼역 도보 5분 거리에 위치한 신축 오피스텔입니다. 투자 가치가 높은 지역으로, 안정적인 임대 수익을 기대할 수 있습니다.'
  },
  {
    id: '2',
    title: '성수동 신축 아파트',
    address: '서울특별시 성동구 성수동 67-89',
    city: '서울특별시',
    district: '성동구',
    propertyNumber: '성수동 67-89',
    price: 780000000,
    monthlyReturn: 39000000,
    returnRate: 5.2,
    completionRate: 42,
    type: 'apartment',
    images: [
      '/lovable-uploads/52fe3dbc-6fdc-4db0-a852-50f17a077ab1.png',
      '/lovable-uploads/52fe3dbc-6fdc-4db0-a852-50f17a077ab1.png'
    ],
    area: 82.3,
    constructionYear: 2021,
    description: '성수동의 새로운 랜드마크 아파트입니다. 우수한 입지와 편의시설을 자랑합니다.'
  },
  {
    id: '3',
    title: '마포 상암동 오피스',
    address: '서울특별시 마포구 상암동 12-34',
    city: '서울특별시',
    district: '마포구',
    propertyNumber: '상암동 12-34',
    price: 520000000,
    monthlyReturn: 26000000,
    returnRate: 4.1,
    completionRate: 78,
    type: 'officetel',
    images: [
      '/lovable-uploads/52fe3dbc-6fdc-4db0-a852-50f17a077ab1.png',
      '/lovable-uploads/52fe3dbc-6fdc-4db0-a852-50f17a077ab1.png'
    ],
    area: 76.2,
    constructionYear: 2019,
    description: '디지털 미디어 시티의 중심부에 위치한 프리미엄 오피스텔입니다.'
  },
  {
    id: '4',
    title: '송파 잠실동 아파트',
    address: '서울특별시 송파구 잠실동 45-67',
    city: '서울특별시',
    district: '송파구',
    propertyNumber: '잠실동 45-67',
    price: 920000000,
    monthlyReturn: 41400000,
    returnRate: 3.5,
    completionRate: 88,
    type: 'apartment',
    images: [
      '/lovable-uploads/df268322-948c-4fa4-b50e-5c3f119d717c.png',
      '/lovable-uploads/df268322-948c-4fa4-b50e-5c3f119d717c.png'
    ],
    area: 109.5,
    constructionYear: 2022,
    description: '잠실 새 아파트 단지의 핵심 위치에 자리한 고급 아파트입니다.'
  },
  {
    id: '5',
    title: '용산 한남동 오피스텔',
    address: '서울특별시 용산구 한남동 34-56',
    city: '서울특별시',
    district: '용산구',
    propertyNumber: '한남동 34-56',
    price: 670000000,
    monthlyReturn: 33500000,
    returnRate: 4.2,
    completionRate: 92,
    type: 'officetel',
    images: [
      '/lovable-uploads/f33cf435-ed2f-40fa-ba80-0f834d817d55.png',
      '/lovable-uploads/f33cf435-ed2f-40fa-ba80-0f834d817d55.png'
    ],
    area: 68.7,
    constructionYear: 2021,
    description: '한강변에 위치한 프리미엄 오피스텔로, 탁월한 조망과 투자 가치를 자랑합니다.'
  }
];

// Mock User Portfolio Data
export const userPortfolio: UserPortfolio = {
  totalInvestment: 84000000,
  monthlyIncome: 300000,
  averageReturn: 4.8,
  ownedNFTs: 3,
  nftRate: 15,
  investments: [
    {
      id: '1',
      propertyId: '1',
      amount: 45000000,
      monthlyReturn: 180000,
      returnRate: 4.8,
      purchaseDate: new Date(2023, 11, 15),
      nextPaymentDate: new Date(2025, 4, 1)
    },
    {
      id: '2',
      propertyId: '2',
      amount: 39000000,
      monthlyReturn: 120000,
      returnRate: 3.7,
      purchaseDate: new Date(2024, 0, 10),
      nextPaymentDate: new Date(2025, 1, 10)
    }
  ]
};

// Mock Transaction Data
export const transactions: Transaction[] = [
  {
    id: '1',
    date: '2025년 4월 1일',
    description: '강남 역삼동 오피스텔 월세 수익',
    type: 'income',
    amount: 180000
  },
  {
    id: '2',
    date: '2025년 3월 1일',
    description: '강남 역삼동 오피스텔 월세 수익',
    type: 'income',
    amount: 180000
  },
  {
    id: '3',
    date: '2025년 3월 5일',
    description: '마포 상암동 오피스 투자',
    type: 'purchase',
    amount: 78000000
  }
];

// Mock Rental Payments
export const rentalPayments = [
  {
    id: '1',
    propertyId: '5',
    amount: 2300000,
    date: '2025년 4월 1일',
    status: 'complete'
  },
  {
    id: '2',
    propertyId: '5',
    amount: 2300000,
    date: '2025년 3월 1일',
    status: 'complete'
  },
  {
    id: '3',
    propertyId: '5',
    amount: 2300000,
    date: '2025년 2월 1일',
    status: 'complete'
  }
];
