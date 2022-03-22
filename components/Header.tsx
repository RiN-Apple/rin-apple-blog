import type { NextPage } from 'next';
import NavLink from './header/NavLink';

const Header: NextPage = () => {
  return (
    <header className='flex flex-col gap-y-5 items-center pt-5 mx-auto w-full bg-gray-100'>
      <h1 className='text-3xl font-bold text-slate-700 sm:text-5xl'>RiNの保管庫</h1>
      <nav className='flex flex-row flex-nowrap justify-center w-full text-xs text-gray-100 bg-gray-800 sm:text-base'>
        <NavLink href='/' text='記事一覧' />
        <NavLink href='/about' text='カテゴリ' />
        <NavLink href='/about' text='このブログについて' last />
      </nav>
    </header>
  );
};

export default Header;
