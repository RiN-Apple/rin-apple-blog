import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';

// 生成されたHTMLで使用するコンポーネント
function H2(props: { children?: ReactNode }) {
  return (
    <>
      <h2
        id={props.children?.toString().substring(1, 20)[0]}
        className='pt-7 pb-2 text-2xl font-bold text-gray-600 sm:text-3xl'
      >
        {props.children}
      </h2>
      <div className='mb-2 h-0.5 w-full bg-gray-500'></div>
    </>
  );
}

function H3(props: { children?: ReactNode }) {
  return (
    <>
      <h3
        id={props.children?.toString().substring(0, 20)[0]}
        className='pt-5 pl-2 text-xl font-semibold text-gray-600 sm:text-2xl'
      >
        {props.children}
      </h3>
      <div className='mb-2 ml-2 h-0.5 w-full bg-gray-500'></div>
    </>
  );
}

function P(props: { children?: ReactNode }) {
  return <p className=' p-3'>{props.children}</p>;
}

function A(props: { href?: string; children?: ReactNode }) {
  return (
    <a className='underline' href={props.href}>
      {props.children}
    </a>
  );
}

function Li(props: { children?: ReactNode }) {
  return <li className='list-item'>{props.children}</li>;
}

function Ul(props: { children?: ReactNode }) {
  return <ul className='list-disc pl-5'>{props.children}</ul>;
}

function Ol(props: { children?: ReactNode }) {
  return <ol className='list-decimal pl-5'>{props.children}</ol>;
}

const components = {
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  li: Li,
  ul: Ul,
  ol: Ol,
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
