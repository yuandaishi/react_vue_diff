const Slot = (props) => {
  //模拟vue的插槽,需要自行实现
  console.log("Slot执行");
  return (
    <div style={{ border: "3px solid #cccccc" }}>
      <p>slot组件展示区域</p>
      <div>
        <p>组件的其他内容</p>
        <p>插槽1：</p>
        {props.slotOne || "插槽1默认显示内容"}
      </div>
      <div>
        <p>插槽2：</p>
        {props.slotTwo || "插槽2默认显示内容"}
      </div>
    </div>
  );
};

export default Slot;
