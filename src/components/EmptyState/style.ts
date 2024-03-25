import styled from "styled-components";

export const StyledEmptyStateContainer = styled.div`
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

export const StyledEmptyText = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary.main};
  text-align: center;

  @media (max-width: 600px) {
    width: 184px;
}
`

export const StyledEmptyStateImg = styled.img`
  height: 265px;
  width: 447px;
  object-fit: contain;

  @media (max-width: 600px) {
    height: 265px;
    max-width: 320px;
    object-fit: contain;
  }
`