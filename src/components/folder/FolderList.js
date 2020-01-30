import React, { Fragment } from "react";
import { connect } from "react-redux";

import { addItem, updateItem, deleteItem } from "../../store/actions";
import Folder from "./Folder";
import CreateFolder from "./CreateFolder";

const FolderList = ({
  navigate,
  files = [],
  path,
  addItem,
  updateItem,
  deleteItem
}) => (
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
      <CreateFolder path={path} addItem={addItem} />
    </div>
  </Fragment>
);

const mapDispatchToProps = {
  addItem,
  updateItem,
  deleteItem
};

export default connect(null, mapDispatchToProps)(FolderList);
