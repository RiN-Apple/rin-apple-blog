import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';

// 生成されたHTMLで使用するコンポーネント
function H1(props: { children?: ReactNode }) {
  return <h1 className='text-2xl font-bold text-blue-600'>{props.children}</h1>;
}

function P(props: { children?: ReactNode }) {
  return <p className='p-3'>{props.children}</p>;
}

function Li(props: { children?: ReactNode }) {
  return <li className='list-item list-outside px-6 py-1 drop-shadow-lg'>🏄 {props.children}</li>;
}

const components = {
  h1: H1,
  p: P,
  li: Li,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}

export default MyApp;
