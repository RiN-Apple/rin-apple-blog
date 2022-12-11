import type { NextPage } from 'next';
import Link from 'next/link';

const SideBar: NextPage = () => {
  return (
    <aside className='flex flex-col w-full sm:w-2/5 gap-y-5'>
      <div className='w-full p-2 bg-white'>
        <div className='bg-white border-4 border-gray-500 p-3'>
          <h2 className='underline text-lg'>このブログについて</h2>
          <p>車のためにプログラミングを頑張る大学生の備忘録。</p>
        </div>
      </div>
      <div className='w-full p-2 bg-white'>
        <div className='bg-white border-4 border-gray-500 p-3'>
        <h2 className='underline text-lg'>カテゴリ</h2>
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
