import { ReactNode } from 'react';
import type { NextPage } from 'next';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import SideBar from './SideBar';

type Props = {
  children?: ReactNode;
};

const Layout: NextPage = ({ children,  }: Props) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='mx-auto mt-4 flex min-h-screen w-full max-w-6xl flex-col gap-y-4 p-2 sm:flex-row sm:gap-x-4'>
        <main className='mx-auto flex w-full flex-col'>{children}</main>
        <SideBar />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
