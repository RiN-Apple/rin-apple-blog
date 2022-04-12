import type { NextPage } from 'next';
import FooterNavLink from './footer/FooterNavLink';

const Footer: NextPage = () => {
  return (
    <footer className='flex flex-col justify-center pt-2 mx-auto space-y-2 h-24 font-notoserif text-center text-gray-200 bg-gray-800'>
      <h1>RiNブログ（仮）</h1>
      <nav className='flex flex-row flex-nowrap justify-center text-xs'>
        <FooterNavLink href='/' text='記事一覧' />
        <FooterNavLink href='/about' text='プロフィール' last />
      </nav>
      <p className='text-xs'>&copy;2022 RiN Apple </p>
    </footer>
  );
};

export default Footer;
