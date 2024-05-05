import { useEffect, useState } from 'react';
import { app } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Router from './components/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

function App() {
  const auth = getAuth(app);
  // auth를 체그하기 전에 (initialize 전)에는 loader를 띄워주기 위한 용도
  const [init, setInit] = useState<boolean>(false);
  // auth의 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );
  // 로그인한 사용자라면 Router 컴포넌트에서 작성한대로, 다른 페이지를 보여줘야 한다.
  // 그래서 onAuthStateChanged 메서드를 사용해서 인증상태를 관찰하는 코드를 작성해준다.
  // 작성을 했더니, 사용자가 로그인을 했음에도 새로고침을 하면, 인증정보를 인식하지못하고 로그인 화면이 잠깐 나온다.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      <ToastContainer />
      {/* init이 true면, 로더를 보여준다. */}
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  );
}

export default App;
