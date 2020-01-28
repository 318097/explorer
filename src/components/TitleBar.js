import React from "react";
import { Breadcrumb, Icon } from "antd";

const TitleBar = ({ path = [] }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Icon type="home" />
      </Breadcrumb.Item>
      {path.map(item => (
        <Breadcrumb.Item key={item.id}>{item.name}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default TitleBar;
