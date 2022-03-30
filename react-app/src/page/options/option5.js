import { Outlet } from "react-router-dom";
const Option5 = () => {
  // <Outlet /> 嵌套的路由页面展示在什么地方，有点类似router-view
  return (
    <>
      这里是option5页面
      <p>这是内容1</p>
      {/* 相当于vue的router-view */}
      <Outlet />
      <p>这是内容2</p>
    </>
  );
};

export default Option5;
