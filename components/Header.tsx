import type { NextPage } from 'next';
import Link from 'next/link';
import NavLink from './header/NavLink';
import NavDropDown from './header/NavDropDown';
import NavDropDownMobile from './header/NavDropDownMobile';

const Header: NextPage = () => {
  return (
    <header className='flex flex-col pt-2 w-full font-notoserif text-gray-700  bg-white sm:flex-row sm:justify-between sm:py-3 sm:px-8 md:px-14'>
      <h1 className='my-4 text-lg text-center sm:my-0'>
        <Link href='/'>RiN Blog(仮)</Link>
      </h1>
      <nav className='hidden flex-row flex-nowrap justify-center text-sm sm:flex'>
        <NavLink href='/' text='車' />
        <NavLink href='/' text='プログラミング' />
        <NavLink href='/' text='PC・ガジェット' />
        <NavLink href='/' text='絵' />
        <NavDropDown tags={['動画', '雑記', 'Home']} />
      </nav>
      <nav className='flex  justify-center bg-gray-800 sm:hidden'>
        {/* <a className='py-1 w-full text-center text-white pointer-events-none'>カテゴリ &#9662;</a> */}
        <NavDropDownMobile tags={[]} />
      </nav>
    </header>
  );
};

export default Header;
