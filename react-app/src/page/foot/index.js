import { Button } from "antd";

const Bottom = () => {
  const changeWebText = () => {
    console.log("xxxxx");
  };
  return (
    <>
      <p>Ant Design ©2018 Created by Ant UED</p>
      <Button onClick={changeWebText}>点击</Button>
    </>
  );
};
export default Bottom;
