import { ProductEntity } from "@/entities/Product";
import { useModal } from "@/hooks/useModal";
import { useWeMovies } from "@/hooks/useWeMovies";
import { useNavigate } from "react-router-dom";

export function useCartCardController() {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const { handleSelectProduct, cartItems, totalAmount } = useWeMovies();
  const navigate = useNavigate();

  const total = totalAmount(cartItems);

  function openModal(product: ProductEntity) {
    handleSelectProduct(product);
    handleOpenModal();
  }

  return {
    isModalOpen,
    handleCloseModal,
    openModal,
    navigate,
    total
  }
}