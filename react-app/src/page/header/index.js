import {  Menu } from "antd";
// import { useEffect } from "react";
import { tabArr } from "./state";


const Top = function () {
    const changeTab=(e)=>{
        console.log(e)
    }
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} onClick={changeTab}>
        {
            tabArr.map((item,key)=><Menu.Item key={key}>{item}</Menu.Item>)
        }
      </Menu>
    </>
  );
};

export default Top;
