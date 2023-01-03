import { NextPage } from 'next';
import { faFile, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { PostMetas } from '../scripts/type';

const PostsGrid: NextPage<PostMetas> = (props: PostMetas) => {
  return (
    <div className='grid w-full grid-cols-1 gap-4 p-3 sm:grid-cols-3'>
      {props.postMetas.map((postMeta, index) => {
        return (
          <div key={index} className='bg-white p-2'>
            <Link href={postMeta.link} passHref>
              <a className='cursor-pointer'>
                <Image width={800} height={458} src={postMeta.headImage} alt='title image' />
              </a>
            </Link>

            <p className='text-sm'>投稿日 {postMeta.date}</p>
            {postMeta.update && <p className='text-sm'>更新日 {postMeta.update}</p>}

            <Link href={postMeta.link}>
              <a className='py-1 text-lg font-semibold hover:underline'>{postMeta.title}</a>
            </Link>

            <div className='flex flex-wrap space-x-1 text-xs'>
              <Link href={'/category/' + postMeta.categoryEn} passHref>
                <div className='my-1 flex w-fit space-x-1 rounded-md bg-black p-1 text-white hover:cursor-pointer hover:bg-gray-700'>
                  <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                  <p>{postMeta.category}</p>
                </div>
              </Link>

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
  );
};

export default PostsGrid;
