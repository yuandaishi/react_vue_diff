import { useState } from "react";
import { Button } from "antd";
import Son from "./components/option4-son";

// 父组件给子组件传值基本一样
const Option4 = () => {
    const [name,setName]=useState('YDS');
    const [self,setSelf] =useState(100);
  return (
    <div>
      <p>这里是option4页面</p>
      <p>self：{self}</p>
      {/* <Son :name='name' @changeSelf='setSelf'/>  */}
      <Son name={name} changeSelf={setSelf}/>
    </div>
  );
};

export default Option4;
