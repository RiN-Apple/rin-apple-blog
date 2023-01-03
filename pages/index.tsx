import type { NextPage } from 'next';
import Link from 'next/link';
import Meta from '../components/Meta';
import { getPostMetaTags } from '../scripts/utils';
import Image from 'next/image';
import { faFile, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  postMetas: {
    title: string;
    category: string;
    tags: string[];
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
        <div className='grid w-full grid-cols-1 gap-4 p-3 sm:grid-cols-3'>
          {props.postMetas.map((postMeta, index) => {
            return (
              <div key={index} className='bg-white p-2'>
                <Image width={800} height={458} src={postMeta.headImage} alt='title image' />
                <p className='text-sm'>投稿日 {postMeta.date}</p>
                {postMeta.update && <p className='text-sm'>更新日 {postMeta.update}</p>}

                <Link href={postMeta.link}>
                  <a className='py-1 text-lg font-semibold hover:underline'>{postMeta.title}</a>
                </Link>

                <div className='flex flex-wrap space-x-1 text-xs'>
                  <div className='my-1 flex w-fit space-x-1 rounded-md bg-black p-1 text-white'>
                    <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                    <p>{postMeta.category}</p>
                  </div>
                  {postMeta.tags.map((tag, index) => {
                    return (
                      <div
                        className='my-1 flex w-fit space-x-1 rounded-md border border-black bg-white p-1 text-black'
                        key={index}
                      >
                        <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                        <p>{tag}</p>
                      </div>
                    );
                  })}
                </div>
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
