import { ReactNode } from 'react';
import type { NextPage } from 'next';
import { faTags, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

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

      <div className='flex flex-row space-x-2'>
        <div className='flex w-fit space-x-1 rounded-md bg-black p-2 text-sm text-white'>
          <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
          <p>{meta.category}</p>
        </div>
        {meta.tags.map((tag, index) => {
          return (
            <div
              className='flex w-fit space-x-1 rounded-md border  border-black bg-white p-2 text-sm text-black'
              key={index}
            >
              <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
              <p>{tag}</p>
            </div>
          );
        })}
      </div>

      <h1 className='p-4 text-3xl'>{meta.title}</h1>

      <Image width={800} height={458} src={meta.headImage} alt='title image' />

      {children}

      <div className='flex flex-row space-x-2'>
        <div className='flex w-fit space-x-1 rounded-md bg-black p-2 text-sm text-white'>
          <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
          <p>{meta.category}</p>
        </div>
        {meta.tags.map((tag, index) => {
          return (
            <div
              className='flex w-fit space-x-1 rounded-md border  border-black bg-white p-2 text-sm text-black'
              key={index}
            >
              <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogLayout;
