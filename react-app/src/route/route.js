import { Route } from "react-router-dom";

import Option1 from "../page/options/option1";
import Option2 from "../page/options/option2";
import Option3 from "../page/options/option3";
import Option4 from "../page/options/option4";
import Option5 from "../page/options/option5";
import Option5Son from "../page/options/components/option5-son";

import Nav1 from "../page/navs/nav1";
import Nav2 from "../page/navs/nav2";
import Nav3 from "../page/navs/nav3";

const OptionRouteArr = [
  <Route path="/option1" element={<Option1 />} key="option1" />,
  <Route path="/option2" element={<Option2 />} key="option2" />,
  <Route path="/option3" element={<Option3 />} key="option3" />,
  <Route path="/option4" element={<Option4 />} key="option4" />,
  // 嵌套路由
  <Route path="/option5" element={<Option5 />} key="option5">
    {/* 索引路由，相当于在子路由页面默认渲染的组件 */}
    <Route index element={<Nav3 />}></Route>
    {/* 无匹配路由 没有路由匹配的时候渲染*/}
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    <Route path="son" element={<Option5Son />} key="son"></Route>
  </Route>,
];

const NavRouteArr = [
  <Route path="/nav1" element={<Nav1 />} key="nav1" />,
  <Route path="/nav2" element={<Nav2 />} key="nav2" />,
  <Route path="/nav3" element={<Nav3 />} key="nav3" />,
];

export { OptionRouteArr, NavRouteArr };
