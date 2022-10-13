import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import Todo from "./components/todo/Todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
