import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavBar = styled.div`
  background: black;
  height: 80px;
  line-height: 80px;
  padding: 0 30px;
  display: flex;
`;
const NavLink = styled.a`
  color: white;
  padding: 0 16px;
  font-size: ${({ logo }) => (logo ? '28px' : '18px')};

  &:hover {
    color: ${({ logo }) => (logo ? 'white' : '#f93b78')};
  }
`;

const Header = () => (
  <NavBar>
    <Link href="/">
      <NavLink logo>
        FIFABB
      </NavLink>
    </Link>
    <Link href="/ol4">
      <NavLink>
        FIFA OL4
      </NavLink>
    </Link>
    <Link href="/ffm">
      <NavLink>
        FIFA 足球世界
      </NavLink>
    </Link>
  </NavBar>
);

export default Header;
