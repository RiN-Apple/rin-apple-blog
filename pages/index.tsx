import type { NextPage } from 'next';
import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <>
      <Meta title='Home' description='RiN5 BLOGのHomeページ。' />
      <div className='flex flex-col gap-y-5 w-full '>
        <div className='w-full p-3 bg-white'>
          <h2 >コンテンツ</h2>
        </div>
      </div>
    </>

  );
};

export default Home;
