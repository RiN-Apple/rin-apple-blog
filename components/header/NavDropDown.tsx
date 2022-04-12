import type { NextPage } from 'next';
import { useState } from 'react';

type Props = {
  tags: string[];
};

const NavDropDown: NextPage<Props> = ({ tags }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className='relative p-1 mx-1 hover:bg-gray-100 cursor-pointer'
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div>
          more...{' '}
          <span className={`inline-block ${isOpen ? `rotate-180 translate-y-1` : ''}`}>
            &#9662;
          </span>
        </div>
        {isOpen && (
          <ul className='absolute right-0 p-2 m-1 bg-white rounded-sm shadow-md'>
            {tags.map((tag, index) => {
              return (
                <li key={index} className='p-1'>
                  {tag}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
export default NavDropDown;
