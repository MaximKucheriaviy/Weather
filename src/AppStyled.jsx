import styled from "styled-components";

export const AppStyled = styled.div`
  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 20px;

    & h1 {
      font-family: "Roboto";
      font-style: italic;
      color: white;
      font-size: 50px;
      margin: 0;
      letter-spacing: 5px;
      text-shadow: 2px 2px 1px black;
    }
  }
`;
