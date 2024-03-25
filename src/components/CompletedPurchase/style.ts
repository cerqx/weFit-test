import styled from "styled-components";

export const StyledCompletedPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: calc(100vh - 120px);

  background: ${({theme}) => theme.colors.basic.white};
  border-radius: 4px;
  padding: 16px;

  @media (max-width: 600px) {
    margin: 0 16px;
  }
`

export const StyledCompletedPurchaseText = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary.main};
  text-align: center;

  @media (max-width: 600px) {
    width: 200px;
  }
`

export const StyledCompletedPurchaseImg = styled.img`
  height: 307px;
  width: 294px;
  object-fit: contain;

  @media (max-width: 600px) {
    height: 247px;
    max-width: 238px;
    object-fit: contain;
  }
`