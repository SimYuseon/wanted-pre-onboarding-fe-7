import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const email = useRef();
  const password = useRef();
  const passwordCheck = useRef();

  const [isDisable, setIsDisable] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [ispassWord, setIsPassWord] = useState(false);
  const [ispassWordCheck, setIspassWordCheck] = useState(false);

  const navigate = useNavigate();

  const onChange = () => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (regExp.test(email.current.value) || email.current.value.length === 0) {
      setIsEmail(false);
    } else if (email.current.value.length > 0) {
      setIsEmail(true);
    }

    if (
      password.current.value.length >= 8 ||
      password.current.value.length === 0
    ) {
      setIsPassWord(false);
    } else if (password.current.value.length > 0) {
      setIsPassWord(true);
    }

    if (
      passwordCheck.current.value === password.current.value ||
      passwordCheck.current.value.length === 0
    ) {
      setIspassWordCheck(false);
    } else if (passwordCheck.current.value.length > 0) {
      setIspassWordCheck(true);
    }

    if (
      regExp.test(email.current.value) &&
      password.current.value.length >= 8 &&
      passwordCheck.current.value === password.current.value
    ) {
      setIsDisable(false);
    } else if (
      !regExp.test(email.current.value) ||
      password.current.value.length < 8 ||
      passwordCheck.current.value !== password.current.value
    ) {
      setIsDisable(true);
    }
  };

  const onClickSignUp = async () => {
    await axios
      .post("https://pre-onboarding-selection-task.shop/auth/signup", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        alert("회원가입이 완료!");
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Container>
      <h2 className="title">회원가입 페이지</h2>
      <InputWrap>
        <input
          onChange={onChange}
          className="input"
          placeholder="이메일"
          ref={email}
        />
        {isEmail ? <span>이메일 주소를 확인해주세요</span> : null}

        <input
          onChange={onChange}
          className="input"
          placeholder="비밀번호"
          ref={password}
        />
        {ispassWord ? <span>비밀번호를 8자이상 입력해주세요</span> : null}

        <input
          onChange={onChange}
          className="input"
          placeholder="비밀번호 확인"
          ref={passwordCheck}
        />
        {ispassWordCheck ? <span>동일한 비밀번호를 입력해주세요</span> : null}
      </InputWrap>
      <ButtonWrap>
        <ButtonStyled disabled={isDisable} onClick={onClickSignUp}>
          회원가입
        </ButtonStyled>
        <ButtonStyled
          onClick={() => {
            navigate("/");
          }}
          color="#f8246b"
          backColor="white"
        >
          로그인
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

export default SignUp;
