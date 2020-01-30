import React from "react";
import { Breadcrumb, Icon } from "antd";
import styled from "styled-components";

const StyledItem = styled.span`
  transition: 0.5s;
  cursor: pointer;
  font-size: .9rem;
  padding: 0px 3px;
  color: #2dadba;
  border-radius: 2px;
  line-height: 0;
  &:hover {
    background #2dadba;
    color: white;
  }
`;

const TitleBar = ({ navigate, path = [] }) => {
  return (
    <div className="title-bar">
      <Breadcrumb>
        <Breadcrumb.Item>
          <StyledItem onClick={navigate()}>
            <Icon type="home" /> <span>Home</span>
          </StyledItem>
        </Breadcrumb.Item>
        {path.map(item => (
          <Breadcrumb.Item key={item.id}>
            <StyledItem onClick={navigate(item.id)}>{item.name}</StyledItem>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default TitleBar;
