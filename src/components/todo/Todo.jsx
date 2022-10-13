import { useRef, useState } from "react";
import styled from "styled-components";
import { apis } from "../../api/api";
const Todo = () => {
  const inputRef = useRef();
  //   const [addTodo, setAddTodo]=useState()

  //   const addTodo =  (inputRef.current.value) => {
  //     console.log();
  //    { "data":inputRef.current.value}
  //   };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          apis.addTodo({ todo: inputRef.current.value }).then((res) => {
            console.log(res.data);
          });
        }}
      >
        추가
      </button>
      <div>
        <span>리액트 공부하기</span>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

const InputStyled = () => {};
export default Todo;
