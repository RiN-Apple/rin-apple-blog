import type { NextPage } from 'next';
import Link from 'next/link';
import Meta from '../components/Meta';
import { getPostMetaTags } from '../scripts/utils';

interface Props {
  postMetas: {
    title: string;
    category: string;
    date: string;
    update: string;
    outline: string;
    link: string;
    headImage: string;
  }[];
}

const Home: NextPage<Props> = (props: Props) => {
  return (
    <>
      <Meta title='Home' description='RiN5 BLOGのHomeページ。' />
      <div className='flex w-full flex-col gap-y-5 '>
        <div className='w-full bg-white p-3'>
          <h2>{props.postMetas[0].title}</h2>
          <Link href={props.postMetas[0].link}>{props.postMetas[0].link}</Link>
          <p>{props.postMetas[0].link}</p>
        </div>
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
