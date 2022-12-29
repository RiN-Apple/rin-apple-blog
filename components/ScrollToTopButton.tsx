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
        className='fixed right-8 bottom-8 h-12 w-12 items-center justify-center rounded-full bg-blue-300 font-notoserif text-4xl hover:bg-blue-200'
        onClick={scrollToTop}
      >
        ^
      </button>
    </div>
  );
};

export default ScrollToTopButton;
