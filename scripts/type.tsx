import { ReactNode } from 'react';

export interface PostMetas {
  name?: string;
  postMetas: {
    title: string;
    category: string;
    categoryEn: string;
    tags: string[];
    date: string;
    update: string;
    outline: string;
    link: string;
    headImage: string;
  }[];
}

export interface PostMeta {
  children?: ReactNode;
  meta: {
    title: string;
    category: string;
    categoryEn: string;
    tags: string[];
    date: string;
    update: string;
    outline: string;
    link: string;
    headImage: string;
  };
}
