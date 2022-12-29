import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-gray-100 font-notosans'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
