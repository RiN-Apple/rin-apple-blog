import type { NextPage } from 'next';
import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <div>
      <Meta title='Home' description='RiNBlogのHomeページ。' />
      <h1 className='pt-96'>Home</h1>
      <p>検索</p>
      <p>新着記事</p>
      <p>人気ランキング</p>
      <p>トップカテゴリ</p>
      <p>人気カテゴリへのリンク</p>
      <p>プロフィール</p>
    </div>
  );
};

export default Home;
