import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Link from 'next/link';

const SideBar: NextPage = () => {
  return (
    <aside className='w-full sm:w-1/4'>
      <div className='flex flex-col gap-y-5 sm:sticky sm:top-5'>
        <div className='w-full rounded-md bg-white p-2'>
          <div className='rounded-md border-4 border-gray-400 bg-white p-3'>
            <h2 className='text-center text-lg font-semibold'>カテゴリ</h2>
            <div className='mb-2 h-0.5 w-full bg-gray-400'></div>
            <Link href={'/category/random'} passHref>
              <li className='cursor-pointer hover:underline'>雑記</li>
            </Link>
            <Link href={'/category/programing'} passHref>
              <li className='cursor-pointer hover:underline'>プログラミング</li>
            </Link>
            {/* <Link href={'/category/car'} passHref>
              <li className='cursor-pointer hover:underline'>車</li>
            </Link>
            <Link href={'/category/illustration'} passHref>
              <li className='cursor-pointer hover:underline'>イラスト</li>
            </Link>
            <Link href={'/category/gadget_pc'} passHref>
              <li className='cursor-pointer hover:underline'>ガジェット・PC</li>
            </Link> */}
          </div>
        </div>
        <div className='w-full rounded-md bg-white p-2'>
          <div className='rounded-md border-4 border-gray-400 bg-white p-3'>
            <h2 className=' text-center text-lg font-semibold'>このブログについて</h2>
            <div className='mb-2 h-0.5 w-full bg-gray-400'></div>
            <p>どうもRiN5です。趣味はドライブ、プログラミング、イラスト、音楽、片付けです</p>
            <button
              className=' h-8 w-8 items-center rounded-full bg-white text-center hover:bg-gray-200'
              onClick={() => window.open('https://twitter.com/mrs_rin_apple')}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
