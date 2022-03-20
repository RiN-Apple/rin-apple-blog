import { ReactNode } from 'react';
import type { NextPage } from 'next';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
};

const Layout: NextPage = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
