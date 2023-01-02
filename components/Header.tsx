import type { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <header className='flex w-full flex-col bg-white font-notoserif text-gray-700'>
      <h1 className='mt-3 mb-2 text-center font-semibold'>
        <Link href='/'>RiN5 BLOG</Link>
      </h1>
      <div className='h-1 w-full bg-gray-500' />
    </header>
  );
};

export default Header;
