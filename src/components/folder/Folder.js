import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Icon } from "antd";

import Dropdown from "./Dropdown";

const adjustNamePosition = css`
  position: relative;
  bottom: 5px;
  font-size: 0.7rem;
`;

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
    .icon {
      font-size: 2.5rem;
    }
  }
  .filename {
    flex: 1 0 auto;
    padding: 0 2px;
    text-align: center;
    word-break: break-word;
    font-size: 0.8rem;
    line-height: 10px;
    ${({ fileName }) => fileName.length > 10 && adjustNamePosition};
  }
  .rename-folder-input {
    padding: 2px;
    margin: 0;
    background: #ececec;
    border: none;
    width: 100%;
    font-size: 0.8rem;
  }
`;

const parseFileName = name =>
  name.length > 18 ? name.slice(0, 18) + ".." : name;

const Folder = ({ file, navigate, updateItem, deleteItem }) => {
  const [renameFolderStatus, setRenameFolderStatus] = useState(false);
  const [name, setName] = useState("");

  const renameFolder = () => {
    setName(file.name);
    setRenameFolderStatus(true);
  };

  const handleRename = ({ which: keyCode }) => {
    if (keyCode === 13) {
      updateItem({ fileId: file.id, key: "name", value: name });
      setName("");
      setRenameFolderStatus(false);
    } else if (keyCode === 27) {
      setName("");
      setRenameFolderStatus(false);
    }
  };

  const handleDelete = () => deleteItem(file.id);

  return (
    <Wrapper fileName={file.name} onClick={navigate(file.id)}>
      <div className="icon-wrapper">
        <Icon className="icon" type="folder" />
      </div>
      {renameFolderStatus ? (
        <input
          className="rename-folder-input"
          type="text"
          value={name}
          autoFocus
          onClick={event => event.stopPropagation()}
          onChange={({ target: { value } }) => setName(value)}
          onKeyUp={handleRename}
        />
      ) : (
        <div className="filename">{parseFileName(file.name)}</div>
      )}
      <Dropdown handleDelete={handleDelete} renameFolder={renameFolder} />
    </Wrapper>
  );
};

export default Folder;
