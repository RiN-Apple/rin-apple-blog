import type { NextPage } from 'next';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  url?: string;
  img?: string;
};

const Meta: NextPage<Props> = ({ title, description, url, img }: Props) => {
  return (
    <>
      <Head>
        <title>{`${title} | RiN5 BLOG`}</title>
        <meta charSet='utf-8' />
        <meta content={description} name='description' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta property='og:url' content={'https://blog.rin-five.com' + { url }} />
        <meta property='og:type”' content='website' />
        <meta property='og:title”' content={title} />
        <meta property='og:description”' content={description} />
        <meta property='og:site_name”' content='RiN5 BLOG' />
        {img && <meta property='og:image' content={img} />}
      </Head>
    </>
  );
};

export default Meta;
