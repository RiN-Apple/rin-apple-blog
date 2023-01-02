import type { NextPage } from 'next';
import Link from 'next/link';
import Meta from '../components/Meta';
import { getPostMetaTags } from '../scripts/utils';
import Image from 'next/image';

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
        <div className='grid w-full grid-cols-1 gap-4 bg-white p-3 sm:grid-cols-4'>
          {props.postMetas.map((postMeta, index) => {
            return (
              <div key={index}>
                <Image width={800} height={458} src={postMeta.headImage} alt='title image' />
                <h2>{postMeta.title}</h2>
                <Link href={postMeta.link}>{postMeta.link}</Link>
              </div>
            );
          })}
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
