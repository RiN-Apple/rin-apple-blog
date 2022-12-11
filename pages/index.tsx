import type { NextPage } from 'next';
import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col gap-y-5  w-full bg-white'>
      <Meta title='Home' description='RiNBlogのHomeページ。' />
      
      <h2 className='w-full p-3'>コンテンツ</h2>
    </div>
  );
};

export default Home;
