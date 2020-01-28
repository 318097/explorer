import React from "react";
import { Divider } from "antd";
import { connect } from "react-redux";

import TitleBar from "./TitleBar";
import FolderList from "./FolderList";
import TodoList from "./TodoList";

const Window = ({ path, rootStructure }) => {
  const fileContent = rootStructure;
  return (
    <div>
      <TitleBar path={path} />
      <FolderList files={fileContent.files} />
      <Divider />
      <TodoList todos={fileContent.todos} />
    </div>
  );
};

const mapStateToProps = ({ path, rootStructure }) => ({ path, rootStructure });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Window);
