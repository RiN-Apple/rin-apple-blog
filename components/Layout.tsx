import { ReactNode } from 'react';
import type { NextPage } from 'next';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import SideBar from './SideBar';

type Props = {
  children?: ReactNode;
};

const Layout: NextPage = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className='flex flex-col sm:flex-row max-w-7xl w-full min-h-screen mt-4 mx-auto p-2 gap-y-4 sm:gap-x-4'>
        <main className="flex w-full mx-auto">{children}</main>
        <SideBar />
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
