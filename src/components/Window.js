import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import { connect } from "react-redux";
import { findFilesInPath } from "../store/utils";

import TitleBar from "./TitleBar";
import FolderList from "./FolderList";
import TodoList from "./TodoList";

import { setPath, addItem } from "../store/actions";

const getPath = params => (params.id ? params.id : "/");

const Window = ({ path, pathContent, match, setPath, history, addItem }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const path = getPath(match.params);
    setPath(path);
  }, [match]);

  const navigate = id => () =>
    history.push(id ? `/explorer/${id}` : "/explorer");

  return (
    <div>
      <TitleBar navigate={navigate} path={path} />
      <FolderList
        navigate={navigate}
        files={pathContent && pathContent.files}
        addItem={addItem}
        path={path}
      />
      <Divider style={{ margin: "12px 0" }} />
      <TodoList todos={pathContent && pathContent.todos} />
    </div>
  );
};

const mapStateToProps = ({ rootStructure, path }, ownProps) => {
  const id = getPath(ownProps.match.params);
  const fileInfo = rootStructure[id];
  const pathContent = findFilesInPath(rootStructure, fileInfo);

  return {
    path,
    pathContent
  };
};
const mapDispatchToProps = {
  setPath,
  addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Window);
