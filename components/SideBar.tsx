import type { NextPage } from 'next';

const SideBar: NextPage = () => {
  return (
    <aside className='flex w-full flex-col gap-y-5 sm:w-2/5'>
      <div className='w-full bg-white p-2'>
        <div className='border-4 border-gray-500 bg-white p-3'>
          <h2 className='mb-2 text-center text-lg underline'>このブログについて</h2>
          <p>車のためにプログラミングを頑張る大学生「RiN5」の奮闘記。</p>
        </div>
      </div>
      <div className='w-full bg-white p-2'>
        <div className='border-4 border-gray-500 bg-white p-3'>
          <h2 className='mb-2 text-center text-lg underline'>カテゴリ</h2>
          <p>プログラミング</p>
          <p>車</p>
          <p>イラスト</p>
          <p>雑記</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
