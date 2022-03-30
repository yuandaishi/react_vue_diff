import { Button } from "antd";
import { useEffect, useRef, useState } from "react";

const Option1 = () => {
  console.log("组件更新");
  const ref = useRef(null);
  const [value, setValue] = useState(Math.random());
  const T = useRef(Math.random());
  console.log(T);
  useEffect(() => {
    console.log(
      document.getElementsByClassName("p-dom")[0],
      ref,
      document.getElementsByClassName("p-dom")[0] === ref.current
    );
  }, []);
  return (
    <>
      这里是option1页面
      <p className="p-dom" ref={ref}>
        测试获取dom元素
      </p>
      <p>一个随机数{value}</p>
      <Button onClick={() => setValue(Math.random())}>点击触发组件更新</Button>
    </>
  );
};

export default Option1;
