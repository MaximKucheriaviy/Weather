import styled from "styled-components";

export const FindForm = styled.form`
  display: flex;

  & input {
    height: 50px;
    width: 500px;
    border-radius: 50px;
    box-shadow: 2px 2px 1px black;
  }

  & button {
    margin-left: 20px;
    width: 50px;
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    & svg {
      width: 50px;
      height: 50px;
      fill: white;
      filter: drop-shadow(2px 2px 1px black);
    }
    background-color: transparent;
    border: none;
  }
`;
