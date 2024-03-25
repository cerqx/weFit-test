import styled from "styled-components";

export const StyledContainer = styled.div`
  background: ${({theme}) => theme.colors.basic.white};
  border-radius: 4px;
  padding: 16px;

  @media (max-width: 600px) {
    margin: 0 16px;
  }
`