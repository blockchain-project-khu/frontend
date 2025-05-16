
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PaymentProcessing = () => {
  // Simulate payment processing
  // In a real app, you would call a payment API here

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white shadow-sm rounded-lg p-8 md:p-12 max-w-lg mx-auto">
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">결제 진행 중</h1>
            <p className="text-gray-600 mb-8">
              월세 결제를 안전하게 처리하고 있습니다. 잠시만 기다려주세요.
            </p>
            {/* Show a success message or redirect after actual processing */}
            {/* For now, let's add a button to go back */}
            <p className="text-sm text-gray-500 mb-6">
              이 페이지는 데모용이며, 실제 결제는 이루어지지 않습니다.
            </p>
            <Button asChild variant="outline">
              <Link to="/rent-payment">월세 납부 페이지로 돌아가기</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentProcessing;
