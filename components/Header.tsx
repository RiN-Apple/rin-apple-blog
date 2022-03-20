import type { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
