import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Icon, Checkbox } from "antd";

import Dropdown from "./Dropdown";

const adjustNamePosition = css`
  position: relative;
  bottom: 5px;
  font-size: 0.7rem;
`;

const StyledFolder = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #424242;
  height: 70px;
  width: 70px;
  padding: 0;
  display: inline-block;
  margin: 2px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
  background: white;
  &:hover {
    background: #807f7f7a;
  }
  .icon-wrapper {
    text-align: center;
    .icon {
      font-size: 3rem;
    }
  }
  .filename {
    flex: 1 0 auto;
    padding: 0 2px;
    text-align: center;
    word-break: break-word;
    font-size: 0.9rem;
    line-height: 10px;
    ${({ fileName }) => fileName.length > 10 && adjustNamePosition};
  }
  .rename-folder-input {
    padding: 1px 2px;
    position: relative;
    bottom: 3px;
    margin: 0;
    background: #ececec;
    border: none;
    width: 100%;
    font-size: 0.8rem;
  }
  .checkbox {
    position: absolute;
    top: 0px;
    left: 2px;
  }
`;

const parseFileName = name =>
  name.length > 18 ? name.slice(0, 18) + ".." : name;

const Folder = ({
  file,
  navigate,
  updateItem,
  deleteItem,
  addFolderToSelection
}) => {
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

  const handleSelection = ({ target: { checked } }) =>
    addFolderToSelection(checked ? "add" : "remove", file.id);
  return (
    <StyledFolder fileName={file.name} onClick={navigate(file.id)}>
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
      <Checkbox
        className="checkbox"
        onChange={handleSelection}
        onClick={event => event.stopPropagation()}
      />
      <Dropdown handleDelete={handleDelete} renameFolder={renameFolder} />
    </StyledFolder>
  );
};

export default Folder;
