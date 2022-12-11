import type { NextPage } from 'next';
import Meta from '../components/Meta';

const About: NextPage = () => {
  return (
    <div>
      <Meta title='404NotFoundError' description='RiNBlogの404NotFoundError' />
      <h1 className='pt-96 text-center text-3xl'>404 Not Found Error</h1>
    </div>
  );
};

export default About;
