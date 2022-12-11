import type { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <footer className='flex flex-col w-full justify-between p-3 mx-auto font-notoserif text-center text-gray-200 bg-gray-800'>
      <p className='text-sm'>
        <Link href='/'>RiN5 BLOG</Link>
      </p>
      <p className='text-xs'>&copy;2022- RiN5-Apple</p>
    </footer>
  );
};

export default Footer;
