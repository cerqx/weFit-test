import styled from "styled-components";

export const StyledContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-bottom: 8px;
`

export const StyledMovieNameText = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme}) => theme.colors.basic.dark};
`

export const StyledMoviePriceText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary.main}
`

export const StyledMovieQuantityText = styled.p`
  font-size: 12px;
  font-weight: 400;   
  color: ${({theme}) => theme.colors.basic.white};

  display: flex;
  align-items: center;
  gap: 3.4px;
`