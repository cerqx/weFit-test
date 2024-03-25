import { ComponentProps } from "react";

import { StyledButton } from "./style";

export interface ButtonProps extends ComponentProps<'button'>{
  children: React.ReactNode
  $isProductAddedInCart?: boolean;
  buttonFn?(): void;
}

export function Button({children, $isProductAddedInCart, buttonFn, ...props}: ButtonProps) {
  return (
    <StyledButton $isProductAddedInCart={$isProductAddedInCart} onClick={buttonFn} {...props}>
      {children}
    </StyledButton>
  )
}