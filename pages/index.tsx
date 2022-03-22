import type { NextPage } from 'next';
import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <div>
      <Meta title='Home' description='RiNBlogのHomeページ。' />
      <h1 className='py-96'>Home</h1>
    </div>
  );
};

export default Home;
