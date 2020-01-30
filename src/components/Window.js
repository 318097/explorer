import React, { Fragment, useState, useEffect } from "react";
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
      {pathContent ? (
        <Fragment>
          <FolderList
            navigate={navigate}
            files={pathContent.files}
            path={path}
          />
          <Divider
            style={{ margin: "12px 0", color: "grey", fontSize: ".8rem" }}
            orientation="left"
          >
            {`${pathContent.files.length} Folder(s), ${pathContent.todos.length} Todo(s)`}
          </Divider>
          <TodoList path={path} todos={pathContent.todos} />
        </Fragment>
      ) : (
        <p className="empty-message">Invalid path</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ rootStructure, path }, ownProps) => {
  const fileId = getPath(ownProps.match.params);
  const file = rootStructure[fileId];
  const pathContent =
    fileId !== "/" && !file ? null : findFilesInPath(rootStructure, file);

  return {
    path,
    pathContent
  };
};

const mapDispatchToProps = {
  setPath
};

export default connect(mapStateToProps, mapDispatchToProps)(Window);
