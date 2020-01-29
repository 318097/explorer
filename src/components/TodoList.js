import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      {todos.length > 0
        ? todos.map(todo => <Todo key={todo.id} todo={todo} />)
        : null}
    </div>
  );
};

export default TodoList;
