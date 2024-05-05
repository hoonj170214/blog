import { ReactNode, createContext, useEffect, useState } from 'react';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from 'firebaseApp';

interface AuthProps {
  children: ReactNode;
}

// contextApi 사용하기
// 1. createContext로 context 만들기
// createContext의 인자로 기본값 user객체를 넣어준다.
const AuthContext = createContext({
  user: null as User | null,
});

// context에서 상태관리가 필요한 경우
// context에서 유동적인 currentUser 값을 다뤄야 한다.
// children props를 받아와서 Provider 태그 사이에 넣어주면 된다.
// 그리고 필요한 기능들을 Provider 컴포넌트 안에서 구현해주면된다.
export const AuthContextProvider = ({ children }: AuthProps) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(user);
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
