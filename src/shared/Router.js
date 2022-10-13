import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../components/todo/Todo";
import SignIn from "../components/signin/SignIn";
import SignUp from "../components/signup/SignUp";
import TodoList from "../components/todo/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
