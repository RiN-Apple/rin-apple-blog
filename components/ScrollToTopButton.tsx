import type { NextPage } from 'next';

const ScrollToTopButton: NextPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='relative'>
      <button
        className='fixed right-8 bottom-8 p-2 font-notoserif text-lg bg-blue-300 hover:bg-blue-200 sm:text-3xl'
        onClick={scrollToTop}
      >
        ^
      </button>
    </div>
  );
};

export default ScrollToTopButton;
