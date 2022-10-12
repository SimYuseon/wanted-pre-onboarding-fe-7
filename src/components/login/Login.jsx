import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";
import Form from "./Form";
import Button from "./Button";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isDisable, setIsDisable] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [ispassWord, setIsPassWord] = useState(true);

  const { email, password } = inputs;

  const onChangeInputs = (e) => {
    const { value, name } = e.target;
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setInputs({ ...inputs, [name]: value });

    if (regExp.test(inputs.email) && inputs.password.length >= 8) {
      setIsDisable(false);
      setIsEmail(false);
      setIsPassWord(false);
    } else if (inputs.email.length === 0) {
      setIsEmail(false);
    }

    if (inputs.password.length === 0) {
      setIsPassWord(false);
    }
  };

  const onClickLogin = async () => {
    console.log(inputs.email, inputs.password);
    const { data } = await axios
      .post("https://pre-onboarding-selection-task.shop/auth/signup", {
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <h2 className="title">로그인 페이지</h2>
      <Form
        onChangeInputs={onChangeInputs}
        email={email}
        password={password}
        isEmail={isEmail}
        ispassWord={ispassWord}
      />
      <Button onClickLogin={onClickLogin} isDisable={isDisable} />
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
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  .input {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid gray;
    font-size: 16px;
  }
`;

export default Login;
