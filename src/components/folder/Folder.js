import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

import Dropdown from "./Dropdown";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  height: 60px;
  width: 60px;
  padding: 1px 0;
  display: inline-block;
  margin: 2px;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
  &:hover {
    background: lightgrey;
  }
  .icon-wrapper {
    text-align: center;
    flex: 1 1 auto;
    .icon {
      font-size: 2.2rem;
    }
  }
  .filename {
    padding: 0 2px;
    text-align: center;
    position: relative;
    word-break: break-all;
    font-size: 0.8rem;
  }
`;

const parseFileName = name =>
  name.length > 8 ? name.slice(0, 8) + ".." : name;

const Folder = ({ file, navigate }) => {
  return (
    <Wrapper onClick={navigate(file.id)}>
      <div className="icon-wrapper">
        <Icon className="icon" type="folder" />
      </div>
      <div className="filename">{parseFileName(file.name)}</div>
      <Dropdown />
    </Wrapper>
  );
};

export default Folder;
