import { Breadcrumb } from "antd";
import { observer } from "mobx-react-lite";
import { Bread } from "@/store";

// 使用observer方法调用函数，则这个组件会被动态的监听,使用mobx或者redux状态管理，很多hooks不需要
const BreadDom = observer(()=> {
  console.log('breadcrumb执行')
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>{Bread.bread}</Breadcrumb.Item>
    </Breadcrumb>
  );
})
export default BreadDom;