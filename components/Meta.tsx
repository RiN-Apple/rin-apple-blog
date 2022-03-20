import type { NextPage } from 'next';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
};

const Meta: NextPage<Props> = ({ title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{`${title}|RiN Blog`}</title>
        <meta charSet='utf-8' />
        <meta content={description} name='description' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
    </>
  );
};

export default Meta;
