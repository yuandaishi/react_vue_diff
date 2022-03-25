import { Breadcrumb } from "antd";
import { Bread } from "../../store";

export default function BreadDom() {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>{Bread.bread}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
