import styled from "styled-components";

const Button = ({ onClickSignUp, isDisable }) => {
  return (
    <ButtonWrap>
      <ButtonStyled disabled={isDisable} onClick={onClickSignUp}>
        회원가입
      </ButtonStyled>
    </ButtonWrap>
  );
};

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
export default Button;
