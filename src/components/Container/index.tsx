import { ComponentProps } from "react";

import { StyledContainer } from "./style";

interface ContainerProps extends ComponentProps<'div'>{
  children: React.ReactNode
}

export function Container({ children, ...props }: ContainerProps) {
  return(
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  );
}