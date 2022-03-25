import "./App.css";
import "antd/dist/antd.css";
import { Layout, } from 'antd';

import Top from "./components/header"
import Middle  from "./components/content";
import Bottom  from "./components/foot";

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
