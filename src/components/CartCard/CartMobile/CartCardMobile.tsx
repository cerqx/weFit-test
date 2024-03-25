import { useNavigate } from "react-router-dom";

import { TrashIcon } from "@/assets/icons/TrashIcon";
import { MinusIcon } from "@/assets/icons/MinusIcon";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { Button } from "@/components/Button";
import { useWeMovies } from "@/hooks/useWeMovies";
import { formatCurrency } from "@/utils/formatCurrency";

import { ProductImage } from "../../ProductImage";

import { StyledCartItemMobile, StyledProductsDetailsMobile, StyledProductNameAndPriceMobile, StyledQuantityAndSubTotalMobile, StyledContainerMobile, StyledSubTotalPriceMobile, StyledSubtotalAndTrashIconContainerMobile } from "./style";
import { StyledCounterProductQuantity, StyledDivider, StyledFooter, StyledNameText, StyledProductQuantity, StyledSubTotalText, StyledTotal, StyledTotalPriceText, StyledTotalText } from "../style";

export function CartCardMobile() {
  const navigate = useNavigate();
  const { cartItems, handleAddProductToCart, handleDecreaseProductFromCart, totalAmount, subTotalAmount,  handleRemoveProductFromCart  } = useWeMovies();
  const total = totalAmount(cartItems);

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
                <div onClick={() => handleRemoveProductFromCart(item.id)}>
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
    </StyledContainerMobile>
  )
}