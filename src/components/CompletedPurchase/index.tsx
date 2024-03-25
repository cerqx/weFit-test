import { ComponentProps } from "react";

import completedPurchase from '@/assets/illustrations/completed-purchase.svg'

import { Button } from "../Button";

import { StyledCompletedPurchaseContainer, StyledCompletedPurchaseImg, StyledCompletedPurchaseText } from "./style";

interface CompletedPurchaseComponentProps extends ComponentProps<'div'> {
  buttonFn?(): void;
}

export function CompletedPurchaseComponent({ buttonFn, ...props }: CompletedPurchaseComponentProps) {
  return (
    <StyledCompletedPurchaseContainer {...props}>
      <StyledCompletedPurchaseText>
          Compra realizada com sucesso!
      </StyledCompletedPurchaseText>

      <StyledCompletedPurchaseImg src={completedPurchase} alt="Imagem de compra realizada" />

      <Button style={{width: '173px'}} onClick={buttonFn}>VOLTAR</Button>
    </StyledCompletedPurchaseContainer>
  )
}