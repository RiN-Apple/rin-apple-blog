import type { NextPage } from 'next';
import Meta from '../components/Meta';

const About: NextPage = () => {
  return (
    <div>
      <Meta title='About' description='RiNBlogのAboutページ。' />
      <h1 className='py-96'>About</h1>
    </div>
  );
};

export default About;
