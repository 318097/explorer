import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { message } from "antd";

import { getNodeId } from "../../utils";
import { addItem, updateItem, deleteItem, copyItem } from "../../store/actions";
import CustomButton from "../CustomButton";
import Folder from "./Folder";
import CreateFolder from "./CreateFolder";

const FolderList = ({
  navigate,
  files = [],
  path,
  addItem,
  updateItem,
  deleteItem,
  copyItem
}) => {
  const [selectedFolders, setSelectedFolders] = useState([]);
  const [copyStatus, setCopyStatus] = useState("initial");

  const addFolderToSelection = (action = "add", id) => {
    if (action === "add") {
      setSelectedFolders(prev => [...prev, id]);
    } else {
      setSelectedFolders(prev => prev.filter(folderId => folderId !== id));
    }
  };

  const copyFolders = () => {
    setCopyStatus("copied");
    message.success(`Copied ${selectedFolders.length} Folders.`);
  };

  const pasteFolders = () => {
    copyItem({ files: selectedFolders, target: getNodeId(path) });
    setSelectedFolders([]);
    setCopyStatus("initial");
  };

  return (
    <Fragment>
      <div className="folder-list">
        <div className="folders">
          {files.length > 0 ? (
            files.map(file => (
              <Folder
                addFolderToSelection={addFolderToSelection}
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
        </div>
        <div className="actions">
          {selectedFolders.length > 0 && (
            <Fragment>
              <span>
                {selectedFolders.length} Folder(s){" "}
                {copyStatus === "copied" ? "copied" : "selected"}.
              </span>
              {copyStatus === "copied" ? (
                <CustomButton onClick={pasteFolders}>Paste</CustomButton>
              ) : (
                <CustomButton onClick={copyFolders}>Copy</CustomButton>
              )}
            </Fragment>
          )}
          <CreateFolder path={path} addItem={addItem} />
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = {
  addItem,
  updateItem,
  deleteItem,
  copyItem
};

export default connect(null, mapDispatchToProps)(FolderList);
