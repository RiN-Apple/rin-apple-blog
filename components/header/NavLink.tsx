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
      <Link href={href}>
        <a className='p-1 mx-1 hover:bg-gray-100'>{text}</a>
      </Link>
      {!last && <div className='p-1'>|</div>}
    </>
  );
};
export default NavLink;
