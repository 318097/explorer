import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  height: 50px;
  width: 50px;
  padding: 1px 0;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    background: lightgrey;
  }
  .icon {
    font-size: 1.8rem;
  }
  .filename {
    position: relative;
    bottom: 3px;
    font-size: 0.7rem;
  }
`;

const FolderList = ({ files = [] }) => {
  return (
    <div>
      {files.map(file => {
        return (
          <Wrapper>
            <div>
              <Icon className="icon" type="folder" />
            </div>
            <div className="filename">{file.name}</div>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default FolderList;
