import { useNavigate } from "react-router-dom";

import { useWeMovies } from "@/hooks/useWeMovies";

import { CartCardWeb } from "./CartWeb/CartCardWeb";
import { CartCardMobile } from "./CartMobile/CartCardMobile";

import { EmptyState } from "../EmptyState";

export function CartCard() {
  const { cartItems } = useWeMovies();
  const navigate = useNavigate();
  return (
    <>
      {cartItems.length > 0 && (
        <>
          <CartCardWeb />
          <CartCardMobile />
        </>
      )}

      {!cartItems.length && (
        <EmptyState buttonTxt="Voltar para a página inicial" buttonFn={() => navigate('/')} />
      )}
    </>
  )
}