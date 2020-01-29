import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import { connect } from "react-redux";
import { findFilesInPath } from "../store/utils";

import TitleBar from "./TitleBar";
import FolderList from "./folder/FolderList";
import TodoList from "./todos/TodoList";

import { setPath } from "../store/actions";

const getPath = params => (params.id ? params.id : "/");

const Window = ({ path, pathContent, match, setPath, history }) => {
  // const [loading, setLoading] = useState(false);

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
        path={path}
      />
      <Divider style={{ margin: "12px 0" }} />
      <TodoList path={path} todos={pathContent && pathContent.todos} />
    </div>
  );
};

const mapStateToProps = ({ rootStructure, path }, ownProps) => {
  const fileId = getPath(ownProps.match.params);
  const fileInfo = rootStructure[fileId];
  const pathContent = findFilesInPath(rootStructure, fileInfo);

  return {
    path,
    pathContent
  };
};

const mapDispatchToProps = {
  setPath
};

export default connect(mapStateToProps, mapDispatchToProps)(Window);
