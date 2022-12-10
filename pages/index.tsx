import type { NextPage } from 'next';
import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col gap-y-5 p-5'>
      <Meta title='Home' description='RiNBlogのHomeページ。' />
      <div>
        <h2>プロフィール</h2>
      </div>
      <div>
        <h2>カテゴリ</h2>
        <p>検索</p>
        <p>新着記事</p>
        <p>人気ランキング</p>
        <p>トップカテゴリ</p>
        <p>人気カテゴリへのリンク</p>
        <p>プロフィール</p>
      </div>
      <h2 className='py-96'>コンテンツ</h2>
    </div>
  );
};

export default Home;
