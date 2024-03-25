import styled from "styled-components";

export const StyledContainer = styled.div`
  background: ${({theme}) => theme.colors.basic.white};
  border-radius: 4px;
  padding: 24px;
  margin: 0 16px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledCartHeader = styled.div`
  display: grid;
  grid-template-columns: 28% 35% 35% 2%;

  font-weight: 700;
  font-size: 14px;
  color: ${({theme}) => theme.colors.gray.main};

  @media (max-width: 600px) {
    display: none;
  }
`

export const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const StyledProductNameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`