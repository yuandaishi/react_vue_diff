import "./App.css";
import "antd/dist/antd.min.css";
import { Layout, } from 'antd';

import Top from "./page/header"
import Middle  from "./page/content";
import Bottom  from "./page/foot";

const { Header, Content, Footer, } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <Top/>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Middle/>
      </Content>
      <Footer style={{ textAlign: "center" }}>
          <Bottom/>
      </Footer>
    </Layout>
  );
}

export default App;
