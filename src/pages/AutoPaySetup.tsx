
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast'; // shadcn toast
import { Banknote, CreditCard } from 'lucide-react';

const AutoPaySetup = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would connect to a payment gateway API
    toast({
      title: "자동 납부 설정 완료",
      description: "자동 납부 설정이 성공적으로 저장되었습니다. (데모)",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center md:text-left">자동 납부 설정</h1>
          <div className="bg-white shadow-sm rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <Banknote className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <p className="text-gray-700">
                  월세를 편리하게 자동 납부하도록 은행 계좌 또는 카드를 연결하세요.
                </p>
              </div>

              <div>
                <Label htmlFor="accountNumber" className="text-sm font-medium text-gray-700">계좌 번호</Label>
                <div className="relative mt-1">
                  <Input
                    id="accountNumber"
                    type="text"
                    placeholder="'-' 없이 숫자만 입력"
                    className="pl-10"
                  />
                   <Banknote className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <Label htmlFor="cardName" className="text-sm font-medium text-gray-700">카드 번호</Label>
                 <div className="relative mt-1">
                    <Input
                        id="cardNumber"
                        type="text"
                        placeholder="16자리 카드 번호"
                        className="pl-10"
                    />
                    <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">유효기간 (MM/YY)</Label>
                  <Input id="expiryDate" type="text" placeholder="MM/YY" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cvc" className="text-sm font-medium text-gray-700">CVC</Label>
                  <Input id="cvc" type="text" placeholder="뒷면 3자리" className="mt-1" />
                </div>
              </div>

              <p className="text-xs text-gray-500">
                입력하신 정보는 안전하게 암호화되어 처리됩니다. 이 페이지는 데모용이며, 실제 정보는 저장되지 않습니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button type="submit" className="w-full sm:w-auto">
                  자동 납부 연결하기
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <Link to="/rent-payment">취소하고 돌아가기</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutoPaySetup;
