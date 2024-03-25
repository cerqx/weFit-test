import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 88px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 16px;
  }
`

export const StyledWeMoviesName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.basic.white};

  cursor: pointer;
`

export const StyledMyCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  cursor: pointer;
` 

export const StyledMyCartText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.basic.white}
`

export const StyledMyCartCounterText = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.gray.main};
  text-align: end;
`