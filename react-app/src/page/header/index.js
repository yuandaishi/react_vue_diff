import { Menu } from "antd";
// import { useEffect } from "react";
import { Bread } from "@/store";

const {tabArr,changeBread} = Bread;

const Top = (props) => {
  // props就是父组件传过来的数据
  console.log("header执行");
  return (
    <>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        onClick={changeBread}
      >
        {
          // react循环输出，相当于vue的v-for，但是写法全都是基于js
          tabArr.map((item, key) => (
            <Menu.Item key={key}>{item}</Menu.Item>
          ))
        }
      </Menu>
    </>
  );
};

export default Top;
