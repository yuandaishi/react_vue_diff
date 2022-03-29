import { Statistic, Card, Row, Col } from "antd";
import React from "react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "./index.less";

// 使用memo实现类函数shouldComponentUpdate的效果，vue框架内部做了处理，使用mobx的话，会更加简单
const SlotOne = (props) => {
  console.log("SlotOne执行");
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Active"
              value={props.value}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
const isEqual = (props, nextProps) => {
  if (props.value === nextProps.value) {
    return true;
  }
};

export default React.memo(SlotOne, isEqual);
