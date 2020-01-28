import React from "react";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgrey;
  padding: 7px 5px;
  margin: 3px 10px;
  .name {
    flex: 1 1 auto;
  }
`;

const TodoList = ({ todo }) => {
  return (
    <TodoWrapper>
      <span className="name">{todo.task}</span>
      <span className="status">{todo.status}</span>
    </TodoWrapper>
  );
};

export default TodoList;
