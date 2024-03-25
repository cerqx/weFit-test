import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useWeMovies } from "@/hooks/useWeMovies";

export function useCompletedPurchaseController() {
  const navigate = useNavigate();
  const { resetCart } = useWeMovies();

  useEffect(() => {
      resetCart();
  }, [resetCart]);

  return {
      navigate
  }
}