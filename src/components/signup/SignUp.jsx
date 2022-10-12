import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";
import Form from "./Form";
import Button from "./Button";
const SignUp = () => {
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
      setIsEmail(true);
      setIsPassWord(true);
    } else if (inputs.email.length > 0) {
      setIsEmail(false);
    }

    if (inputs.password.length > 0) {
      setIsPassWord(false);
    }
  };

  const onClickSignUp = async () => {
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
      <h2 className="title">회원가입 페이지</h2>
      <Form
        onChangeInputs={onChangeInputs}
        email={email}
        password={password}
        isEmail={isEmail}
        ispassWord={ispassWord}
      />
      <Button onClickLogin={onClickSignUp} isDisable={isDisable} />
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

export default SignUp;
