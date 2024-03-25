import styled from "styled-components"

export const StyledContainerMobile = styled.div`
  background: ${({theme}) => theme.colors.basic.white};
  border-radius: 4px;
  padding: 16px;
  margin: 0 16px;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const StyledCartItemMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;


  &:not(:last-of-type) {
    padding-bottom: 16px;
  }

  @media (min-width: 600px) {
    display: none;
  }
`

export const StyledProductsDetailsMobile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`

export const StyledProductNameAndPriceMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const StyledSubtotalAndTrashIconContainerMobile = styled.div`
  display: flex;
  gap: 16px;
`

export const StyledQuantityAndSubTotalMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const StyledSubTotalPriceMobile = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme}) => theme.colors.gray.main};
`