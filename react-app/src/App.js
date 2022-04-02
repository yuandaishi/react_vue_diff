import "./App.css";
import "antd/dist/antd.min.css";
import { Layout, } from 'antd';

import Top from "./page/header"
import Middle  from "./page/content";
import Bottom  from "./page/foot";

const { Header, Content, Footer, } = Layout;

// 每一个函数，都是一个组件，return的内容，就是组件渲染的内容
// .vue文件由template，js，css组成
function App() {
  return (
    <Layout>
      <Header className="header">
        <Top name="top"/>
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
