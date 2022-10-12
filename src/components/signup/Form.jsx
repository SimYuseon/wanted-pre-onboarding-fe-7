import styled from "styled-components";

const Form = ({ onChangeInputs, email, password, isEmail, ispassWord }) => {
  return (
    <InputWrap>
      <input
        onChange={onChangeInputs}
        name="email"
        className="input"
        placeholder="이메일"
        value={email}
      />
      {isEmail ? null : <span>이메일 주소를 확인해주세요</span>}
      <input
        onChange={onChangeInputs}
        name="password"
        className="input"
        placeholder="비밀번호"
        value={password}
      />
      {ispassWord ? null : <span>비밀번호를 8자이상 입력해주세요</span>}
    </InputWrap>
  );
};

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

export default Form;
