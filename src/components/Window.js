import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import { connect } from "react-redux";

import TitleBar from "./TitleBar";
import FolderList from "./FolderList";
import TodoList from "./TodoList";

import { setPath } from "../store/actions";

const Window = ({ path, pathContent, match, setPath, history }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const path = match.params.id ? match.params.id : "/";
    setPath(path);
  }, [match]);

  const navigate = id => () => {
    history.push(id ? `/explorer/${id}` : "/explorer");
  };

  return (
    <div>
      <TitleBar navigate={navigate} path={path} />
      <FolderList
        navigate={navigate}
        files={pathContent && pathContent.files}
      />
      <Divider />
      <TodoList todos={pathContent && pathContent.todos} />
    </div>
  );
};

const mapStateToProps = ({ path, pathContent }) => ({
  path,
  pathContent
});
const mapDispatchToProps = {
  setPath
};

export default connect(mapStateToProps, mapDispatchToProps)(Window);
