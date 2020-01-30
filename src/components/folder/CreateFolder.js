import React, { useState } from "react";
import { Icon, Input } from "antd";
import styled from "styled-components";

import { getNodeId } from "../../utils";
import CustomButton from "../CustomButton";

const CreateFolderWrapper = styled.div`
  display: inline-block;
  margin: 0 2px;
  input {
    font-size: 0.7rem;
    margin: 0 2px;
  }
  .container {
    display: flex;
    align-items: center;
    // background: gainsboro;
    border-radius: 2px;
    padding: 0px 10px;
    input {
      width: 100px;
    }
  }
`;

const CreateFolder = ({ path, addItem }) => {
  const [inputBoxVisibility, setInputBoxVisibility] = useState(false);
  const [folderName, setFolderName] = useState("");

  const createNewFolder = () => {
    const name = folderName.trim() || "New Folder";
    addItem({
      itemType: "folder",
      name: name,
      parentId: getNodeId(path)
    });
    setInputBoxVisibility(false);
    setFolderName("");
  };

  return (
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
          <CustomButton onClick={() => setInputBoxVisibility(false)}>
            Cancel
          </CustomButton>
          <CustomButton onClick={createNewFolder}>Create</CustomButton>
        </div>
      ) : (
        <CustomButton
          size="small"
          onClick={() => setInputBoxVisibility(prev => !prev)}
        >
          New Folder
          <Icon type="folder-add" />
        </CustomButton>
      )}
    </CreateFolderWrapper>
  );
};

export default CreateFolder;
