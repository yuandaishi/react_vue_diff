// 函数的第一个参数，就是父组件传过来的props对象，相对于vue更加直观
// vue有自己的规则，当前组件的数据在data中，父组件传过来的在props中，子组件通过$emit触发父组件事件
import { Button } from "antd";
const Option4Son = (props) => {
  const { name,changeSelf } = props;
  return (
    <div style={{ border: "1px solid #cccccc" }}>
      <p>option4-son页面</p>
      <p>name：{name}</p>
      {/* <Button @click='$emti('changeSelf',Math.random())'>点击改变父组件self</Button> */}
      <Button onClick={()=>changeSelf(Math.random())}>点击改变父组件self</Button>
    </div>
  );
};
export default Option4Son;
