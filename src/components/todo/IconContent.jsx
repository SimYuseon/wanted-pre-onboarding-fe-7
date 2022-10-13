import styled from "styled-components";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

const IconContent = ({
  isUpDate,
  isCompleted,
  setIsCompleted,
  todo,
  upDateRef,
}) => {
  return (
    <IconContentWrap>
      {isUpDate ? (
        isCompleted ? (
          <AiFillCheckCircle
            className="icon"
            onClick={() => {
              setIsCompleted(!isCompleted);
            }}
          />
        ) : (
          <AiOutlineCheckCircle
            className="icon"
            onClick={() => {
              setIsCompleted(!isCompleted);
            }}
          />
        )
      ) : isCompleted ? (
        <AiFillCheckCircle className="icon" />
      ) : (
        <AiOutlineCheckCircle className="icon" />
      )}

      {isUpDate ? (
        <input ref={upDateRef} type="text" defaultValue={todo.todo} />
      ) : (
        <span>{todo.todo}</span>
      )}
    </IconContentWrap>
  );
};

const IconContentWrap = styled.div`
  display: flex;
  align-items: center;
  .icon {
    color: #f8246b;
  }
`;
export default IconContent;
