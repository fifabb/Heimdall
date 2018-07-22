import React from 'react';
import Head from 'next/head';
import { Row, Col } from 'antd';

import Header from './Header';

const Layout = ({ children }) => (
  <Row>
    <Col span={24}>
      <Head>
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <Header />
      {children}
    </Col>
  </Row>
);

export default Layout;
