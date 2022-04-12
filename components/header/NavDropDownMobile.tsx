import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Props = {
  tags: string[];
};

const NavDropDownMobile: NextPage<Props> = ({ tags }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <div
        className=' py-1 w-full text-center text-white cursor-pointer'
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div>
          カテゴリ{' '}
          <span className={`inline-block ${isOpen ? `rotate-180 translate-y-0.5` : ''}`}>
            &#9662;
          </span>
        </div>

        {isOpen && (
          <ul className='p-1 text-black bg-white'>
            <li>動画</li>
            <li>雑記</li>
            <li>Home</li>
          </ul>
        )}
      </div>
    </>
  );
};
export default NavDropDownMobile;
