import React, { useState } from "react";
import styled from "styled-components";
import { Icon, Input, Button } from "antd";
import { connect } from "react-redux";

import { addItem, updateItem, deleteItem } from "../../store/actions";
import Todo from "./Todo";

const CreateTodoWrapper = styled.div`
  text-align: center;
  margin: 10px auto;
  button,
  input {
    font-size: 0.7rem;
    margin: 2px;
  }
  .container {
    width: 300px;
    margin: 2px auto;
  }
`;

const TodoList = ({ todos = [], path, addItem, updateItem, deleteItem }) => {
  const [inputBoxVisibility, setInputBoxVisibility] = useState(false);
  const [name, setName] = useState("");

  const createNewTodo = () => {
    if (!name.trim()) return;
    addItem({
      name,
      itemType: "todos",
      parentId: (path.length && path[path.length - 1]["id"]) || null
    });
    setInputBoxVisibility(false);
    setName("");
  };

  return (
    <div className="todo-list">
      {todos.length > 0
        ? todos.map(todo => (
            <Todo
              updateItem={updateItem}
              deleteItem={deleteItem}
              key={todo.id}
              todo={todo}
            />
          ))
        : null}
      <CreateTodoWrapper>
        {inputBoxVisibility ? (
          <div className="container">
            <Input
              size="small"
              value={name}
              autoFocus
              placeholder="Task.."
              onChange={({ target: { value } }) => setName(value)}
              onPressEnter={createNewTodo}
            />
            <Button size="small" onClick={() => setInputBoxVisibility(false)}>
              Cancel
            </Button>
            <Button size="small" onClick={createNewTodo}>
              Create
            </Button>
          </div>
        ) : (
          <Button
            size="small"
            onClick={() => setInputBoxVisibility(prev => !prev)}
          >
            New Todo
            <Icon type="plus" />
          </Button>
        )}
      </CreateTodoWrapper>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
  updateItem,
  deleteItem
};

export default connect(null, mapDispatchToProps)(TodoList);
