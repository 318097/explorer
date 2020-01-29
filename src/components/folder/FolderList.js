import React, { useState, Fragment } from "react";
import { Icon, Input, Button } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

import { addItem, updateItem, deleteItem } from "../../store/actions";
import Folder from "./Folder";

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

const FolderList = ({
  navigate,
  files = [],
  path,
  addItem,
  updateItem,
  deleteItem
}) => {
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
          files.map(file => (
            <Folder
              updateItem={updateItem}
              deleteItem={deleteItem}
              key={file.id}
              navigate={navigate}
              file={file}
            />
          ))
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

const mapDispatchToProps = {
  addItem,
  updateItem,
  deleteItem
};

export default connect(null, mapDispatchToProps)(FolderList);
