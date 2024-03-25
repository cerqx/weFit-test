import { ComponentProps } from "react";

import { StyledGridContainer } from "./style";

interface GridContainerProps extends ComponentProps<'div'> {
  children: React.ReactNode
}

export function GridContainer({children}: GridContainerProps) {
  return (
    <StyledGridContainer>
        {children}
    </StyledGridContainer>
  )
}