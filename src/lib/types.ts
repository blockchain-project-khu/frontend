
export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  district: string;
  propertyNumber: string;
  price: number;
  monthlyReturn: number;
  returnRate: number;
  completionRate: number;
  type: 'officetel' | 'apartment' | 'villa' | 'house';
  images: string[];
  area: number;
  constructionYear: number;
  description: string;
}

export interface Investment {
  id: string;
  propertyId: string;
  amount: number;
  monthlyReturn: number;
  returnRate: number;
  purchaseDate: Date;
  nextPaymentDate: Date;
}

export interface UserPortfolio {
  totalInvestment: number;
  monthlyIncome: number;
  averageReturn: number;
  ownedNFTs: number;
  nftRate: number;
  investments: Investment[];
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  type: 'income' | 'purchase';
  amount: number;
}
