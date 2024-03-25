import { ComponentProps } from "react";
import { useNavigate } from "react-router-dom";

import { CartIcon } from "@/assets/icons/CartIcon";
import { useWeMovies } from "@/hooks/useWeMovies";

import { StyledHeader, StyledMyCartContainer, StyledMyCartCounterText, StyledMyCartText, StyledWeMoviesName } from "./style";

interface HeaderProps extends ComponentProps<'header'> {}

export function Header({...props}: HeaderProps) {
  const { cartItems } = useWeMovies();
  const navigate = useNavigate();
  const quantityOfItens = cartItems?.length === 1 ? '1 item' : `${cartItems?.length} itens`;

  return(
    <StyledHeader {...props}>
      <StyledWeMoviesName onClick={() => navigate('/')}>
          WeMovies
      </StyledWeMoviesName>

      <StyledMyCartContainer onClick={() => navigate('/cart')}>
        <div>
          <StyledMyCartText>Meu carrinho</StyledMyCartText>
          <StyledMyCartCounterText>{quantityOfItens}</StyledMyCartCounterText>
        </div>

        <CartIcon />
      </StyledMyCartContainer>
    </StyledHeader>
  )
}