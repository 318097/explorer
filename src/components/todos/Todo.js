import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Icon, Divider, Popconfirm } from "antd";

const todoSuccess = css`
  text-decoration: line-through;
  color: grey;
  font-style: italic;
`;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgrey;
  margin: 3px;
  padding: 0;
  position: relative;
  &:before {
    content: "";
    display: block;
    height: 100%;
    width: 5px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ status }) =>
      status === "done" ? "lightgreen" : "lightgrey"};
  }
  .name {
    padding: 3px 10px;
    flex: 1 1 auto;
    ${({ status }) => status === "done" && todoSuccess};
  }
  .status {
    padding: 0 1px;
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
  .edit-todo-input {
    padding-left: 5px;
    flex: 1 1 auto;
    z-index: 1;
    margin: 0;
    background: #f1f1f1;
    border: none;
    font-size: 0.8rem;
  }
`;

const TodoList = ({ todo: { name, status, id }, updateItem, deleteItem }) => {
  const [editTodoStatus, setEditTodoStatus] = useState(false);
  const [title, setTitle] = useState("");

  const updateTodoStatus = () =>
    updateItem({ fileId: id, key: "status", value: "done" });

  const updateTodoName = ({ which: keyCode }) => {
    if (keyCode === 13) {
      updateItem({ fileId: id, key: "name", value: title });
      setTitle("");
      setEditTodoStatus(false);
    } else if (keyCode === 27) {
      setTitle("");
      setEditTodoStatus(false);
    }
  };

  const handleDelete = () => deleteItem(id);

  return (
    <TodoWrapper status={status}>
      {editTodoStatus ? (
        <input
          className="edit-todo-input"
          type="text"
          autoFocus
          value={title}
          onClick={event => event.stopPropagation()}
          onChange={({ target: { value } }) => setTitle(value)}
          onKeyUp={updateTodoName}
        />
      ) : (
        <span className="name">{name}</span>
      )}
      <div className="status">
        <Icon
          type="edit"
          onClick={() => {
            setEditTodoStatus(prop => !prop);
            setTitle(name);
          }}
        />
        <Popconfirm
          title="Delete?"
          onConfirm={handleDelete}
          placement="top"
          okText="Yes"
          cancelText="No"
        >
          <Icon type="delete" />
        </Popconfirm>
        <Divider style={{ background: "grey" }} type="vertical" />
        <Icon type="check" onClick={updateTodoStatus} />
      </div>
    </TodoWrapper>
  );
};

export default TodoList;
