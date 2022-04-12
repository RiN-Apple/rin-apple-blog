import type { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  href: string;
  text: string;
  last?: boolean;
};

const FooterNavLink: NextPage<Props> = ({ href, text, last }: Props) => {
  return (
    <>
      <div className='px-3 hover:bg-gray-700'>
        <Link href={href}>
          <a>{text}</a>
        </Link>
      </div>
      {!last && <div className=''>|</div>}
    </>
  );
};
export default FooterNavLink;
