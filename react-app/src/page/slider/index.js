import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;
const Slide=()=>{
    return(
        <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1"><Link to="/option1">option1</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/option2">option2</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/option3">option3</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/option4">option4</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/option5">option5</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
}
export default Slide