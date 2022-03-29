import { Progress } from "antd";

const SlotTwo = () => {
    console.log('slotTwo执行')
  return (
    <>
      <Progress percent={50} status="active" />
    </>
  );
};

export default SlotTwo;