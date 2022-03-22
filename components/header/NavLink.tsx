import type { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  href: string;
  text: string;
  last?: boolean;
};

const NavLink: NextPage<Props> = ({ href, text, last }: Props) => {
  return (
    <>
      <div className='p-3 mx-1 hover:bg-gray-500'>
        <Link href={href}>
          <a>{text}</a>
        </Link>
      </div>
      {!last && <div className='py-3'>|</div>}
    </>
  );
};
export default NavLink;
