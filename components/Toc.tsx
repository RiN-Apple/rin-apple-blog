import type { NextPage } from 'next';
import { useEffect } from 'react';
import tocbot from 'tocbot';

// Table of Contents (目次)
const Toc: NextPage = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.blogContents',
      headingSelector: 'h2, h3',
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className=''>
      <h4 className='pt-2 text-2xl font-bold text-gray-600 sm:text-3xl'>目次</h4>
      <div className='mb-2 h-0.5 w-full bg-gray-500'></div>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className='toc px-3 [&_ol]:list-decimal [&_ol]:px-2 [&_ol]:text-base [&_ul]:text-lg'></div>
    </div>
  );
};

export default Toc;
