import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { accountAPI } from "../api/api";
import LoginButton from "../components/login/LoginButton";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  });

  const onClickLogin = () => {
    accountAPI
      .postLogin({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        console.log(res);
        alert("로그인 완료!");
        localStorage.setItem("access_token", res.access_token);
        navigate("/todo");
      })
      .catch((err) => {
        if (err.response.data.message === "Unauthorized") {
          alert("비밀번호를 확인해주세요");
        }
      });
  };

  return (
    <Container>
      <h2 className="title">로그인 페이지</h2>
      <LoginForm emailRef={emailRef} passwordRef={passwordRef} />
      <LoginButton onClickLogin={onClickLogin} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 10%;
  .title {
    text-align: center;
    color: #f8246b;
  }
`;

export default Login;
