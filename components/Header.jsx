import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginLeft: 20,
};

const Header = () => (
  <div>
    <Link href="/">
      <a>
        FIFABB
      </a>
    </Link>
    <Link href="/ol4">
      <a style={linkStyle}>
        FIFA OL4
      </a>
    </Link>
    <Link href="/ffm">
      <a style={linkStyle}>
        FIFA Mobile
      </a>
    </Link>
  </div>
);

export default Header;
