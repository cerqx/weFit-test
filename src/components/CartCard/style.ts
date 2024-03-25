import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 25% 35% 33% 2%;
  align-items: center;
  gap: 16px;

  padding: 24px 0;

  @media (max-width: 600px) {
    display: none;
  }
`

export const StyledNameText = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${({theme}) => theme.colors.primary.main}
`

export const StyledProductQuantity = styled.div`
  display: flex;
  align-items: center;
`

export const StyledCounterProductQuantity = styled.div`
  border-radius: 4px;
  border: 1px ${({theme}) => theme.colors.gray.light} solid;
  padding: 3.5px 26.5px;
  margin: 0 11px;
`

export const StyledSubTotalText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.primary.main};
`

export const StyledDivider = styled.hr`
  background: ${({theme}) => theme.colors.gray.main};

  @media (max-width: 600px) {
    margin-top: 21px;
}
`

export const StyledTotalText = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${({theme}) => theme.colors.gray.main}
`

export const StyledTotalPriceText = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: ${({theme}) => theme.colors.primary.main}
`

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;

  @media (max-width: 600px) {
    padding-top: 21px;
    flex-direction: column;
    gap: 16px;
}
`

export const StyledTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`