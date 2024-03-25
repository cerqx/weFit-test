import styled, { keyframes } from "styled-components";

export const StyledLoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoading = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${({theme}) => theme.colors.gray.dark};
  border-right: 2px solid ${({theme}) => theme.colors.gray.dark};
  border-bottom: 2px solid ${({theme}) => theme.colors.gray.lighter};
  border-left: 4px solid ${({theme}) => theme.colors.gray.lighter};
  background: transparent;
  width: 62.25px;
  height: 62.25px;
  border-radius: 50%;
`;