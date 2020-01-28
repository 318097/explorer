import React from "react";
import { Breadcrumb, Icon } from "antd";

const TitleBar = ({ path = "/" }) => {
  const folderPaths = path.split("/");
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Icon type="home" />
      </Breadcrumb.Item>
      {folderPaths.map((item, index) => (
        <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default TitleBar;
