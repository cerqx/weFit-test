import { ComponentProps } from "react";

import { StyledHeader, StyledMyCartContainer, StyledMyCartCounterText, StyledMyCartText, StyledWeMoviesName } from "./style";
import { CartIcon } from "@/assets/icons/CartIcon";

interface HeaderProps extends ComponentProps<'header'> {}

export function Header({...props}: HeaderProps) {
    return(
        <StyledHeader {...props}>
            <StyledWeMoviesName>WeMovies</StyledWeMoviesName>

            <StyledMyCartContainer>
                <div>
                    <StyledMyCartText>Meu carrinho</StyledMyCartText>
                    <StyledMyCartCounterText>0 itens</StyledMyCartCounterText>
                </div>

                <CartIcon />
            </StyledMyCartContainer>
        </StyledHeader>
    )
}