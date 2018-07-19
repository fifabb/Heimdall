import Head from 'next/head'
import { Row, Col } from 'antd'

import Header from './Header'

const layoutStyle = {
}

const Layout = ({ children }) => (
  <Row style={layoutStyle}>
    <Col span={24}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link rel='stylesheet' href='/_next/static/style.css' />
      </Head>
      <Header />
      {children}
    </Col>
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}
    </style>
  </Row>
)

export default Layout
