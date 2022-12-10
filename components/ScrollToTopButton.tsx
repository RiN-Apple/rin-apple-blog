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
        className='fixed right-8 bottom-8 justify-center items-center w-16 h-16 font-notoserif text-6xl bg-blue-300 hover:bg-blue-200 rounded-full'
        onClick={scrollToTop}
      >
        ^
      </button>
    </div>
  );
};

export default ScrollToTopButton;
