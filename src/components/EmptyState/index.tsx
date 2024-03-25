import { ComponentProps } from "react";

import emptyState from '@/assets/illustrations/emptyImg.svg';

import { Button } from "../Button";

import { StyledEmptyStateContainer, StyledEmptyStateImg, StyledEmptyText } from "./style";

interface EmptyStateProps extends ComponentProps<'div'> {
  buttonTxt: string;
  buttonFn(): void;
}

export function EmptyState({buttonTxt, buttonFn, ...props}: EmptyStateProps) {
  return (
    <StyledEmptyStateContainer {...props}>
      <StyledEmptyText>Parece que não há nada por aqui :(</StyledEmptyText>
      <StyledEmptyStateImg src={emptyState} alt="Imagem EmptyState" />
      <Button buttonFn={buttonFn} style={{width: '180px'}}>
        {buttonTxt}
      </Button>
    </StyledEmptyStateContainer>
  )
}