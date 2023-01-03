import type { NextPage } from 'next';
import Meta from '../components/Meta';
import { getPostMetaTags } from '../scripts/utils';
import PostsGrid from '../components/PostsGrid';
import { PostMetas } from '../scripts/type';

const Home: NextPage<PostMetas> = (props: PostMetas) => {
  return (
    <>
      <Meta title='Home' description='RiN5 BLOGのHomeページ。' />
      <div className='flex w-full flex-col gap-y-5 '>
        <PostsGrid postMetas={props.postMetas}></PostsGrid>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const postMetas = await getPostMetaTags(); // the argument has no effect yet

  return {
    props: {
      postMetas,
    },
  };
};

export default Home;
