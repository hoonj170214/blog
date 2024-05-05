import AuthContext from 'context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { app } from 'firebaseApp';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const handleSignOut = async () => {
  try {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success('로그아웃 되었습니다!');
  } catch (error: any) {
    console.log(error);
    toast.error(error?.code);
  }
};

export default function Profile() {
  const { user } = useContext(AuthContext);
  // 원래는 getAuth 메서드를 사용해서 user?.currentUser?.email 이런식으로 접근했었는데, useContext를 사용해서 바로 user?.email 이런식으로 작업할 수 있다.
  // const auth = getAuth(app);
  console.log(user);

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">{user?.email}</div>
          <div className="profile__name">{user?.displayName || '사용자'}</div>
        </div>
      </div>
      <div
        role="presentation"
        className="profile__logout"
        onClick={handleSignOut}
      >
        로그아웃
      </div>
    </div>
  );
}
