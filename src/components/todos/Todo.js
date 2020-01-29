import React from "react";
import styled from "styled-components";
import { Icon, Divider } from "antd";

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgrey;
  padding: 3px 10px;
  margin: 3px;
  position: relative;
  &:before {
    content: "";
    display: block;
    height: 100%;
    width: 5px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ status }) => (status === "done" ? "green" : "lightgrey")};
  }
  .name {
    flex: 1 1 auto;
  }
  .status {
    position: absolute;
    height: 100%;
    top: 0;
    padding: 0 1px;
    right: 0;
    background: #ececec;
    & > * {
      margin: 2px;
    }
    .anticon {
      transition: 0.5s;
      border-radius: 50%;
      padding: 4px;
      &:hover {
        background: lightgrey;
      }
    }
  }
`;

const TodoList = ({ todo: { name, status, id }, updateItem, deleteItem }) => {
  const handleUpdate = () =>
    updateItem({ fileId: id, key: "status", value: "done" });

  const handleDelete = () => deleteItem(id);

  return (
    <TodoWrapper status={status}>
      <span className="name">{name}</span>
      <span className="status">
        <Icon type="edit" onClick={handleUpdate} />
        <Icon type="delete" onClick={handleDelete} />
        <Divider type="vertical" />
        <Icon type="check" onClick={handleUpdate} />
      </span>
    </TodoWrapper>
  );
};

export default TodoList;
