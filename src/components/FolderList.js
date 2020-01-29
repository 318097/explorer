import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { Icon, Input, Button } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  height: 60px;
  width: 60px;
  padding: 1px 0;
  display: inline-block;
  margin: 3px;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    background: lightgrey;
  }
  .icon {
    font-size: 2.2rem;
  }
  .filename {
    margin: 2px;
    position: relative;
    bottom: 3px;
    word-break: break-all;
    font-size: 0.8rem;
    line-height: 10px;
  }
`;

const CreateFolderWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: flex-end;
  button,
  input {
    font-size: 0.7rem;
    margin: 0 2px;
  }
  .container {
    display: flex;
    align-items: center;
    background: lightgrey;
    padding: 5px 10px;

    input {
      width: 100px;
    }
  }
`;

const parseFileName = name =>
  name.length > 8 ? name.slice(0, 8) + ".." : name;

const FolderList = ({ navigate, files = [], addItem, path }) => {
  const [inputBoxVisibility, setInputBoxVisibility] = useState(false);
  const [folderName, setFolderName] = useState("");

  const createNewFolder = () => {
    const name = folderName.trim() || "New Folder";
    addItem({
      itemType: "folder",
      name: name,
      parentId: path.length && path[path.length - 1]["id"]
    });
    setInputBoxVisibility(false);
    setFolderName("");
  };

  return (
    <Fragment>
      <div className="folder-list">
        {files.length > 0 ? (
          files.map(file => {
            return (
              <Wrapper onClick={navigate(file.id)} key={file.id}>
                <div>
                  <Icon className="icon" type="folder" />
                </div>
                <div className="filename">{parseFileName(file.name)}</div>
              </Wrapper>
            );
          })
        ) : (
          <p className="empty-message">Empty folder</p>
        )}

        <CreateFolderWrapper>
          {inputBoxVisibility ? (
            <div className="container">
              <Input
                size="small"
                value={folderName}
                autoFocus
                placeholder="Folder Name"
                onChange={({ target: { value } }) => setFolderName(value)}
                onPressEnter={createNewFolder}
              />
              <Button size="small" onClick={() => setInputBoxVisibility(false)}>
                Cancel
              </Button>
              <Button size="small" onClick={createNewFolder}>
                Create
              </Button>
            </div>
          ) : (
            <Button
              size="small"
              onClick={() => setInputBoxVisibility(prev => !prev)}
            >
              New Folder
              <Icon type="folder-add" />
            </Button>
          )}
        </CreateFolderWrapper>
      </div>
    </Fragment>
  );
};

export default FolderList;
