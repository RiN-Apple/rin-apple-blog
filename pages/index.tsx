import type { NextPage } from 'next';
import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <>
      <Meta title='Home' description='RiN5 BLOGのHomeページ。' />
      <div className='flex w-full flex-col gap-y-5 '>
        <div className='w-full bg-white p-3'>
          <h2>コンテンツ</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
