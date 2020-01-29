import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { Icon, Input, Button } from "antd";

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
    line-height: 9px;
  }
`;

const CreateFolderWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: flex-end;
  .container {
    display: flex;
    align-items: center;
    background: lightgrey;
    padding: 5px 10px;
    & > * {
      margin: 0 2px;
    }
    input {
      width: 100px;
      font-size: 0.8rem;
    }
  }
`;

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
                <div className="filename">{file.name}</div>
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
