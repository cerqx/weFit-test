import styled from "styled-components";
import { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => props.$isProductAddedInCart ? props.theme.colors.green : props.theme.colors.blue.main};
  transition: background 0.2s ease-in;

  height: 40px;
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-size: 12px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.basic.white};
  text-align: center;

  &:hover{
    background: ${({theme}) => theme.colors.blue.dark}
  }
`