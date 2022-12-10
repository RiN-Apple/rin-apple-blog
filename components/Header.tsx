import type { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <header className='flex flex-col w-full font-notoserif text-gray-700 bg-white'>
      <h1 className='mt-3 mb-2 text-center'>
        <Link href='/'>RiN5 BLOG</Link>
      </h1>
      <div className='w-full h-1 bg-gray-600' />
    </header>
  );
};

export default Header;
