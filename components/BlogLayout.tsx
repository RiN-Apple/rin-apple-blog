import { ReactNode } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import BlogCategoryAndTags from './BlogCategoryAndTags';

type Props = {
  children?: ReactNode;
  meta: {
    title: string;
    category: string;
    tags: string[];
    date: string;
    update: string;
    outline: string;
    link: string;
    headImage: string;
  };
};

// ブログ本文上下の設定
const BlogLayout: NextPage<Props> = ({ children, meta }: Props) => {
  return (
    <section className='flex w-full flex-col gap-y-2 rounded-md bg-white px-2 py-3'>
      <div className='flex flex-row justify-start space-x-2'>
        <p>投稿日 {meta.date}</p>
        <p>更新日 {meta.update}</p>
      </div>

      <BlogCategoryAndTags category={meta.category} tags={meta.tags}></BlogCategoryAndTags>

      <h1 className='p-4 text-3xl'>{meta.title}</h1>

      <Image width={800} height={458} src={meta.headImage} alt='title image' />

      {children}

      <BlogCategoryAndTags category={meta.category} tags={meta.tags}></BlogCategoryAndTags>
    </section>
  );
};

export default BlogLayout;
