import React from "react";
import { Breadcrumb, Icon } from "antd";
import styled from "styled-components";

const CustomLink = styled.span`
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: #337cca;
  }
`;

const TitleBar = ({ navigate, path = [] }) => {
  return (
    <div className="title-bar">
      <Breadcrumb>
        <Breadcrumb.Item>
          <CustomLink onClick={navigate()}>
            <Icon type="home" /> <span>Home</span>
          </CustomLink>
        </Breadcrumb.Item>
        {path.map(item => (
          <Breadcrumb.Item key={item.id}>
            <CustomLink onClick={navigate(item.id)}>{item.name}</CustomLink>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default TitleBar;
