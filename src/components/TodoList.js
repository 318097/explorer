import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos: { name, data = [] } = {} }) => {
  return (
    <div>
      {data.length > 0
        ? data.map(todo => <Todo key={todo.id} todo={todo} />)
        : null}
    </div>
  );
};

export default TodoList;
