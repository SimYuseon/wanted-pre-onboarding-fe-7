import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const onClickLogin = async () => {
    await axios
      .post("https://pre-onboarding-selection-task.shop/auth/signin", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        alert("로그인 완료!");
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => {
        if (err.response.data.message === "Unauthorized") {
          alert("비밀번호를 확인해주세요");
        } else {
          alert(err.response.data.message);
        }
      });
  };

  return (
    <Container>
      <h2 className="title">로그인 페이지</h2>
      <InputWrap>
        <input className="input" placeholder="이메일" ref={email} />

        <input className="input" placeholder="비밀번호" ref={password} />
      </InputWrap>
      <ButtonWrap>
        <ButtonStyled onClick={onClickLogin}>로그인</ButtonStyled>
        <ButtonStyled
          onClick={() => {
            navigate("/signup");
          }}
          color="#f8246b"
          backColor="white"
        >
          회원가입
        </ButtonStyled>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 10%;
  .title {
    text-align: center;
    color: #f8246b;
  }
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  .input {
    padding: 10px;
    border-radius: 5px;
    border: 2px solid gray;
    font-size: 16px;
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
    color: #f8246b;
    font-size: 12px;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonStyled = styled.button`
  margin-bottom: 5px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.backColor || "#f8246b"};
  &:disabled {
    opacity: 0.5;
  }
`;

export default Login;
