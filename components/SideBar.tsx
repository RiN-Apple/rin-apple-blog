import type { NextPage } from 'next';

const SideBar: NextPage = () => {
  return (
    <aside className='flex w-full flex-col gap-y-5 sm:w-2/5'>
      <div className='w-full rounded-md bg-white p-2'>
        <div className='rounded-md border-4 border-gray-500 bg-white p-3'>
          <h2 className='mb-2 text-center text-lg font-semibold underline'>カテゴリ</h2>
          <li>プログラミング</li>
          <li>車</li>
          <li>イラスト</li>
          <li>雑記</li>
        </div>
      </div>
      <div className='w-full rounded-md bg-white p-2'>
        <div className='rounded-md border-4 border-gray-500 bg-white p-3'>
          <h2 className='mb-2 text-center text-lg font-semibold underline'>このブログについて</h2>
          <p>どうもRiN5です。趣味はドライブ、プログラミング、イラスト、音楽、片付けです</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
