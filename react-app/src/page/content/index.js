import { Layout, Table, Button } from "antd";
import { useState } from "react";
import Slide from "./../slider/index";
import Bread from "./../Breadcrumb/index";
import { columnsArr, dataSource, randomName, radamTextArr } from "./state";

const { Content } = Layout;
const Middle = () => {
  const [columns, setColumns] = useState(columnsArr); //useState钩子函数

  return (
    <>
      <Bread />
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Slide />
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <p>这里是内容页面</p>
          <Table dataSource={dataSource} columns={columns} />
          <Button
            onClick={() =>
              setColumns((pre) =>
                pre.concat({ title: randomName(radamTextArr), key: pre.length })
              )
            }
          >
            点击新增table表头
          </Button>
          {/* <Button onClick={}>点击新增table表头</Button> */}
        </Content>
      </Layout>
    </>
  );
};
export default Middle;
