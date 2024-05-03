import Header from '../../components/Header';
import PostDetail from '../../components/PostDetail';
import Footer from '../../components/Footer';

export default function PostDetailPage() {
  // 포스트를 가져오는 작업, 포스트가 어떤 포스트인지 분류하는 작업을 해야 하기 때문에 따로 레이아웃을 컴포넌트로 빼서 작업했다.

  return (
    <>
      <Header />
      <PostDetail />
      <Footer />
    </>
  );
}
