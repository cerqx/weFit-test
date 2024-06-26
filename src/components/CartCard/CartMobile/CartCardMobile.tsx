import { TrashIcon } from "@/assets/icons/TrashIcon";
import { MinusIcon } from "@/assets/icons/MinusIcon";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { Button } from "@/components/Button";
import { useWeMovies } from "@/hooks/useWeMovies";
import { formatCurrency } from "@/utils/formatCurrency";
import { Modal } from "@/components/Modal";

import { ProductImage } from "../../ProductImage";
import { useCartCardController } from "../useCartCardController";

import { StyledCartItemMobile, StyledProductsDetailsMobile, StyledProductNameAndPriceMobile, StyledQuantityAndSubTotalMobile, StyledContainerMobile, StyledSubTotalPriceMobile, StyledSubtotalAndTrashIconContainerMobile } from "./style";
import { StyledCounterProductQuantity, StyledDivider, StyledFooter, StyledNameText, StyledProductQuantity, StyledSubTotalText, StyledTotal, StyledTotalPriceText, StyledTotalText } from "../style";

export function CartCardMobile() {
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
    <StyledContainerMobile>
      {cartItems?.map(item => (
        <StyledCartItemMobile key={item.id}>
          <ProductImage style={{height: '82px', width: '64px'}} imgUrl={item.image} altTxt="Imagem do produto"/>
          <StyledProductsDetailsMobile>
            <StyledProductNameAndPriceMobile>
              <StyledNameText style={{maxWidth: '102px'}}>{item.title}</StyledNameText>

              <StyledSubtotalAndTrashIconContainerMobile>
                <StyledSubTotalText>{formatCurrency(item.price)}</StyledSubTotalText>
                <div onClick={() => openModal(item)}>
                    <TrashIcon />
                </div>
              </StyledSubtotalAndTrashIconContainerMobile>
            </StyledProductNameAndPriceMobile>

            <StyledQuantityAndSubTotalMobile>
              <StyledProductQuantity>
                <div onClick={() => handleDecreaseProductFromCart(item)}>
                  <MinusIcon />
                </div>

                <StyledCounterProductQuantity>{item.quantity}</StyledCounterProductQuantity>

                <div onClick={() => handleAddProductToCart(item)}>
                  <PlusIcon />
                </div>
              </StyledProductQuantity>

              <div>
                <StyledSubTotalPriceMobile>SUBTOTAL</StyledSubTotalPriceMobile>
                <StyledSubTotalText>{formatCurrency(subTotalAmount(item.quantity, item.price))}</StyledSubTotalText>
              </div>
            </StyledQuantityAndSubTotalMobile>
          </StyledProductsDetailsMobile>
        </StyledCartItemMobile>
      ))}

      <StyledDivider />

      <StyledFooter>
        <StyledTotal>
          <StyledTotalText>TOTAL</StyledTotalText>
          <StyledTotalPriceText>{formatCurrency(total)}</StyledTotalPriceText>
        </StyledTotal>
        <Button onClick={() => navigate('/completed-purchase')}>FINALIZAR PEDIDO</Button>
      </StyledFooter>

      {isModalOpen && (
        <Modal
          movieName={selectedProduct.title}
          isVisible={isModalOpen}
          onCancel={handleCloseModal}
          onConfirm={() => handleRemoveProductFromCart(selectedProduct.id)}
        />
      )}
    </StyledContainerMobile>
  )
}