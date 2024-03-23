import styled from "styled-components";

export const StyledContainer = styled.div`
    background: ${({theme}) => theme.colors.basic.white};
    padding: 16px;
    border-radius: 4px;

    @media (max-width: 600px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`