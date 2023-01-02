import type { NextPage } from 'next';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <header className='flex w-full flex-col bg-white font-notoserif text-gray-700'>
      <div className='flex flex-row justify-between px-6 text-lg md:px-10'>
        <h1 className='mt-3 mb-2 text-center font-semibold'>
          <Link href='/'>RiN5 BLOG</Link>
        </h1>
        <button
          className='mt-3 mb-2 h-8 w-8 items-center rounded-full bg-white text-center hover:bg-gray-200'
          onClick={() => window.open('https://twitter.com/mrs_rin_apple')}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </button>
      </div>
      <div className='h-1 w-full bg-gray-500' />
    </header>
  );
};

export default Header;
