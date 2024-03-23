import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body{
    background: ${({ theme }) => theme.colors.primary.main};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    max-width: 1080px;
    margin: 0 auto;
  }

  button{
    cursor: pointer;
  }
`;