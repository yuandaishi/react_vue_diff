import { Layout, Table, Button, Drawer, Space } from "antd";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Slide from "./../slider/index";
import Bread from "./../Breadcrumb/index";
import Slot from "./components/slot";
import SlotOne from "./components/slotOne";
import SlotTwo from "./components/slotTwo";
import { useLocation } from "react-router-dom";
import { OptionRouteArr, NavRouteArr } from "../../route/route";
import { columnsArr, dataSource, randomName, radamTextArr } from "./state";

const { Content } = Layout;
const Middle = () => {
  // hook提供了很多钩子函数，每个钩子函数会在相应的生命周期执行。react的生命周期请参考：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  // setColumns会更新state，导致组件重新渲染（直接改变state并不会让组件重新渲染，以前的类组件使用this.setState,hook使用useState），相当于这个函数重新执行
  //组件有变化，这个函数就会重新执行，重新render并return，但是钩子函数只有在相应的生命周期才执行
  console.log("Middle执行");
  let [columns, setColumns] = useState(columnsArr); //useState钩子函数
  let [visible, setVisible] = useState(false);
  let [value, setValue] = useState(70);
  const location = useLocation(); //使用这个hooks获取location对象
  const setDrawer = (con) => setVisible(con);
  return (
    <>
      <Bread />
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Slide />
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          {/* react渲染路由组件的时候，没有vue简答，vue使用router-view，底层会完成很多事情 */}
          <Routes>
            {OptionRouteArr.map((item) => item)}
            {NavRouteArr.map((item) => item)}
          </Routes>
          {/* 根路径展示的页面 */}
          {/* react没有v-if等很多指令，vue有很多封装好的指令，提升开发效率，但是相应的要记住的东西更多 */}
          <div style={{display:location.pathname==='/'?'block':'none'}}>
            <p>这里是内容页面</p>
            <Table dataSource={dataSource} columns={columns} />
            <Button
              onClick={() =>
                setColumns((pre) =>
                  pre.concat({
                    title: randomName(radamTextArr),
                    key: pre.length,
                  })
                )
              }
            >
              点击新增table表头
            </Button>
            <p>分隔按钮</p>
            <Button type="primary" onClick={setDrawer.bind(this, true)}>
              打开抽屉
            </Button>
            {/* 模拟vue插槽 */}
            <Button
              type="primary"
              onClick={() => setValue((Math.random() * 100) | 0)}
              style={{ marginLeft: 20 }}
            >
              更改插槽1数值
            </Button>
            <Slot slotOne={<SlotOne value={value} />} slotTwo={<SlotTwo />} />
          </div>
        </Content>
      </Layout>
      <Drawer
        title={"抽屉"}
        placement="right"
        width={800}
        onClose={setDrawer.bind(this, false)}
        visible={visible}
        extra={
          <Space>
            <Button onClick={setDrawer.bind(this, false)}>取消</Button>
            <Button type="primary" onClick={setDrawer.bind(this, false)}>
              确认
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Middle;
