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
        className='fixed right-8 bottom-8 h-16 w-16 items-center justify-center rounded-full bg-black hover:bg-gray-500'
        onClick={scrollToTop}
      >
        <p className='font-notoserif text-6xl text-white'>^</p>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
