import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
    opacity: 0;
  }

  to{
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
  }

  to{
    opacity: 0;
  }
`;

const scaleIn = keyframes`
  from{
    transform: scale(0);
  }

  to{
    transform: scale(1);
  }
`;

const scaleOut = keyframes`
  from{
    transform: scale(1);
  }

  to{
    transform: scale(0);
  }
`;

export const StyledOverlay = styled.div<{$isLeaving: boolean}>`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s forwards;

  ${(props) =>
    props.$isLeaving &&
    css`
      animation: ${fadeOut} 0.2s forwards;
    `}
`;

export const StyledModalContainer = styled.div<{$isLeaving: boolean}>`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  animation: ${scaleIn} 0.2s forwards;

  ${(props) =>
    props.$isLeaving &&
    css`
      animation: ${scaleOut} 0.2s forwards;
    `}
`;

export const StyledModalTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary.main}
`

export const StyledModalText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary.main};
  margin-top: 32px;
`

export const StyledModalFooter = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancelButton {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 24px;
    color: ${({ theme }) => theme.colors.gray.dark};
  }
`;