import type { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <footer className='mx-auto flex w-full flex-col justify-between bg-gray-800 p-3 text-center font-notoserif text-gray-200'>
      <p className='text-sm'>
        <Link href='/'>RiN5 BLOG</Link>
      </p>
      <p className='text-xs'>&copy;2022- RiN5-Apple</p>
    </footer>
  );
};

export default Footer;
