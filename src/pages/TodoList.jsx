import React, { useEffect, useState } from "react";
import { todoAPI } from "../api/api";
import styled from "styled-components";
import Todo from "../components/todo/Todo";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/todo/TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState();
  const [resTodo, setResTodo] = useState();
  const [delelete, setDelete] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      todoAPI.getTodos().then((res) => {
        console.log(res);
        setTodos(res);
      });
    } else {
      navigate("/");
    }
  }, [navigate, resTodo, delelete]);

  return (
    <ConTainer>
      <h1>Todo List</h1>
      <TodoForm setTodos={setTodos} />

      {todos?.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            setResTodo={setResTodo}
            resTodo={resTodo}
            delelte={delelete}
            setDelete={setDelete}
          />
        );
      })}
    </ConTainer>
  );
};

const ConTainer = styled.div`
  margin: auto;
  width: 50%;
  align-items: center;
`;
export default TodoList;
