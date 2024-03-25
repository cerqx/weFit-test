import { ComponentProps } from "react";

import { Button } from "../Button";
import ReactPortal from "../ReactPortal";

import { StyledModalContainer, StyledModalFooter, StyledModalText, StyledModalTitle, StyledOverlay } from "./style";

export interface ModalProps extends ComponentProps<'div'> {
  onCancel(): void;
  isVisible: boolean;
  onConfirm(): void;
  movieName: string;
}

export function Modal({ isVisible, onCancel, onConfirm, movieName, ...props }: ModalProps) {
  return (
    <ReactPortal containerId="modal-root">
      <StyledOverlay onClick={onCancel} $isLeaving={!isVisible}>
        <StyledModalContainer $isLeaving={!isVisible} {...props}>
          <StyledModalTitle>Tem certeza que deseja remover o filme {movieName}?</StyledModalTitle>

          <StyledModalText>Essa ação não poderá ser desfeita</StyledModalText>

          <StyledModalFooter>
            <button
              onClick={onCancel}
              type="button"
              className="cancelButton"
            >
              Cancelar
            </button>

            <Button style={{width: '200px', background: '#FE3F61'}} buttonFn={onConfirm}>
              Deletar
            </Button>
          </StyledModalFooter>
        </StyledModalContainer>
      </StyledOverlay>
    </ReactPortal>
  )
}