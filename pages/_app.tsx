import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

// 生成されたHTMLで使用するコンポーネント
function H2(props: { children?: ReactNode }) {
  return (
    <>
      <h2
        id={props.children?.toString().split(0, 20)}
        className='pt-2 text-2xl font-bold text-gray-600 sm:text-3xl'
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
        // id={ReactDOMServer.renderToStaticMarkup(props.children)}
        id={props.children?.toString().split(0, 20)}
        className='pt-2 pl-2 text-xl font-semibold text-gray-600 sm:text-2xl'
      >
        {props.children}
      </h3>
      <div className='mb-2 ml-2 h-0.5 w-full bg-gray-500'></div>
    </>
  );
}

function P(props: { children?: ReactNode }) {
  return <p className='p-3'>{props.children}</p>;
}

function Li(props: { children?: ReactNode }) {
  return <li className='list-item list-inside px-6 py-1 '>{props.children}</li>;
}

function Ul(props: { children?: ReactNode }) {
  return <ul className='list-disc'>{props.children}</ul>;
}

function Ol(props: { children?: ReactNode }) {
  return <ol className='list-decimal'>{props.children}</ol>;
}

function Code({ className, ...props }: { className: string; props: string }) {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag='div' {...props} />
  ) : (
    <code className={className} {...props} />
  );
}

const components = {
  h2: H2,
  h3: H3,
  p: P,
  li: Li,
  ul: Ul,
  ol: Ol,
  code: Code,
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
