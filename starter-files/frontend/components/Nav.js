import Link from 'next/link';

const Nav= () => (
  <div>
    <Link href='/sell'>
      <a>Sell</a>
    </Link>
    &nbsp;|&nbsp;
    <Link href='/'>
      <a>Home</a>
    </Link>
  </div>
)

export default Nav;