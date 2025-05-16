
import React, { createContext, useContext, useState, useEffect } from 'react';

// User 타입을 수정하여 name과 email을 포함하고, password를 제거합니다.
type User = {
  username: string; // 로그인 시 사용되는 식별자
  name: string;     // Navbar에서 사용될 사용자 이름
  email: string;    // Navbar에서 사용될 사용자 이메일
};

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void; // 이제 login 함수는 새로운 User 타입을 기대합니다.
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 사용자 정보 불러오기
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser) as User;
        // 저장된 사용자 정보가 새로운 User 타입 구조를 따르는지 간단히 확인 (name, email 존재 여부)
        if (parsedUser && typeof parsedUser.name === 'string' && typeof parsedUser.email === 'string') {
          setUser(parsedUser);
          setIsLoggedIn(true);
        } else {
          // 유효하지 않은 사용자 정보는 삭제
          localStorage.removeItem('user');
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData)); // 새로운 User 구조로 저장
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken'); // accessToken도 함께 제거 (기존 로직 유지)
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

