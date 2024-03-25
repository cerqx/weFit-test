import { MinusIcon } from "@/assets/icons/MinusIcon";
import { formatCurrency } from "@/utils/formatCurrency";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { TrashIcon } from "@/assets/icons/TrashIcon";
import { Button } from "@/components/Button";
import { useWeMovies } from "@/hooks/useWeMovies";
import { Modal } from "@/components/Modal";

import { ProductImage } from "../../ProductImage";
import { useCartCardController } from "../useCartCardController";

import { StyledContainer, StyledCartHeader, StyledProductContainer, StyledProductNameAndPrice } from "./style";
import { StyledCartItem, StyledCounterProductQuantity, StyledDivider, StyledFooter, StyledNameText, StyledProductQuantity, StyledSubTotalText, StyledTotal, StyledTotalPriceText, StyledTotalText } from "../style";

export function CartCardWeb() {
  const {
    cartItems,
    handleAddProductToCart,
    handleDecreaseProductFromCart,
    subTotalAmount,
    handleRemoveProductFromCart,
    selectedProduct
  } = useWeMovies();
  
  const {
    isModalOpen,
    openModal,
    handleCloseModal,
    navigate,
    total
  } = useCartCardController();

  return (
    <StyledContainer>
      <StyledCartHeader>
        <span>PRODUTO</span>
        <span>QTD</span>
        <span>SUBTOTAL</span>
        <span></span>
      </StyledCartHeader> 

      {cartItems?.map(item => (
        <StyledCartItem key={item.id}>
          <StyledProductContainer>
            <ProductImage style={{height: '114px', width: '91px'}} imgUrl={item.image} altTxt="Imagem do produto"/>

            <StyledProductNameAndPrice>
              <StyledNameText>{item.title}</StyledNameText>
              <StyledSubTotalText>{formatCurrency(item.price)}</StyledSubTotalText>
            </StyledProductNameAndPrice>
          </StyledProductContainer> 

          <StyledProductQuantity>
            <div style={{cursor: 'pointer'}} onClick={() => handleDecreaseProductFromCart(item)}>
                <MinusIcon />
            </div>
            <StyledCounterProductQuantity>{item.quantity}</StyledCounterProductQuantity>
            <div style={{cursor: 'pointer'}} onClick={() => handleAddProductToCart(item)}>
                <PlusIcon />
            </div>
          </StyledProductQuantity>
          <StyledSubTotalText>{formatCurrency(subTotalAmount(item.quantity, item.price))}</StyledSubTotalText>
                
          <div style={{cursor: 'pointer'}} onClick={() => openModal(item)}>
            <TrashIcon />
          </div>
        </StyledCartItem>
      ))}

      <StyledDivider />

      <StyledFooter>
        <Button style={{width: '173px'}} onClick={() => navigate('/completed-purchase')}>FINALIZAR PEDIDO</Button>
        <StyledTotal>
          <StyledTotalText>TOTAL</StyledTotalText>
          <StyledTotalPriceText>{formatCurrency(total)}</StyledTotalPriceText>
        </StyledTotal>
      </StyledFooter>

      {isModalOpen && (
        <Modal
          movieName={selectedProduct.title}
          isVisible={isModalOpen}
          onCancel={handleCloseModal}
          onConfirm={() => handleRemoveProductFromCart(selectedProduct.id)}
        />
      )}
    </StyledContainer>
  )
}