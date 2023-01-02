import { ReactNode } from 'react';
import type { NextPage } from 'next';
// import Link from 'next/link';

type Props = {
  children?: ReactNode;
};

// ブログ本文上下の設定
const BlogLayout: NextPage = ({ children, meta }: Props) => {
  return <section className='w-full bg-white p-2'>
    <h1>{meta.title}</h1>
    {children}</section>;
};

export default BlogLayout;
