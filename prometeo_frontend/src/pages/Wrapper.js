import { Layout } from 'antd';
import React from 'react';
const { Header, Content } = Layout;
const Wrapper = (props) => (
  <Layout style={{height: "100%"}}>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        textAlign: "left"
      }}
    >
      <div><img alt="Prometeo" style={{width: "100px"}} src="https://files.readme.io/f823b06-small-Prometeo-blanco.png"/> </div>
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
          height: "100vh",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {props.children}
      </div>
    </Content>
  </Layout>
);
export default Wrapper;