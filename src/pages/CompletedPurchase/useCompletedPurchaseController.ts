import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useWeMovies } from "@/hooks/useWeMovies";
import toast from "react-hot-toast";

export function useCompletedPurchaseController() {
  const navigate = useNavigate();
  const { resetCart } = useWeMovies();

  useEffect(() => {
      resetCart();
      toast.success('Compra realizada com sucesso!')
  }, [resetCart]);

  return {
      navigate
  }
}