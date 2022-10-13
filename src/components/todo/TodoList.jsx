import React, { useEffect, useRef, useState } from "react";
import { api, apis } from "../../api/api";
import styled from "styled-components";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

const TodoList = () => {
  const [todos, setTodos] = useState();
  const [isUpDate, setIsUpDate] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    apis.getTodos().then((res) => {
      setTodos(res);
      console.log(res);
    });
  }, []);

  return (
    <ConTainer>
      <h1>Todo List</h1>
      <div className="input">
        <InputStyle type="text" ref={inputRef} />

        <ButtonStyled
          onClick={() => {
            apis.addTodo({ todo: inputRef.current.value }).then(() => {
              apis.getTodos().then((res) => {
                setTodos(res);
              });
              inputRef.current.value = "";
            });
          }}
        >
          추가
        </ButtonStyled>
      </div>

      {todos?.map((todo) => {
        return (
          <TodosWrap key={todo.id}>
            <div className="todo">
              {todo.isCompleted ? (
                <AiFillCheckCircle className="icon" />
              ) : (
                <AiOutlineCheckCircle className="icon" />
              )}
              {isUpDate ? (
                <input type="text" defaultValue={todo.todo} />
              ) : (
                <span>{todo.todo}</span>
              )}
            </div>
            <div className="button">
              <ButtonStyled
                onClick={() => {
                  setIsUpDate(!isUpDate);
                }}
              >
                {isUpDate ? "제출" : "수정"}
              </ButtonStyled>
              {isUpDate ? (
                <ButtonStyled
                  onClick={() => {
                    setIsUpDate(false);
                  }}
                >
                  취소
                </ButtonStyled>
              ) : (
                <ButtonStyled
                  onClick={() => {
                    apis.deleteTodo(todo.id).then(() => {
                      apis.getTodos().then((res) => {
                        setTodos(res);
                      });
                    });
                  }}
                >
                  삭제
                </ButtonStyled>
              )}
            </div>
          </TodosWrap>
        );
      })}
    </ConTainer>
  );
};

const ConTainer = styled.div`
  margin: auto;
  width: 50%;
  align-items: center;
  .input {
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
  }
  .icon {
    margin-right: 10px;
  }
  .button {
    display: flex;
    justify-content: space-between;
    width: 100px;
  }
`;

const InputStyle = styled.input`
  border-radius: 5px;
  width: 60%;
  border: 1px solid skyblue;
  padding: 5px 10px;
  margin-right: 20px;
`;

const ButtonStyled = styled.button`
  background-color: skyblue;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
`;

const TodosWrap = styled.div`
  display: flex;
  justify-content: space-between;

  border: 1px solid skyblue;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  .todo {
    display: flex;
    align-items: center;
  }
`;

export default TodoList;
