import { ComponentProps } from "react";

import { StyledButton } from "./style";

export interface ButtonProps extends ComponentProps<'button'>{
    children: React.ReactNode
}

export function Button({children, ...props}: ButtonProps) {
    return (
        <StyledButton {...props}>
           {children}
        </StyledButton>
    )
}