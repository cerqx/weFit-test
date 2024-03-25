import { createContext, useCallback, useState } from "react";

import { ProductEntity } from "@/entities/Product";
import { useProducts } from "@/hooks/useProducts";
import { Cart } from "@/entities/Cart";
import toast from "react-hot-toast";

interface WeMoviesContextValue {
  products: ProductEntity[];
  getProducts(): Promise<void>;
  cartItems: Cart[],
  handleAddProductToCart(product: ProductEntity): void;
  handleDecreaseProductFromCart(product: ProductEntity): void;
  countQuantityOfItemsInCart(id: number): number | undefined;
  totalAmount(cartItems: Cart[]): number;
  subTotalAmount(price: number, quantity: number): number;
  handleRemoveProductFromCart(id: number): void;
  resetCart(): void;
  isLoading: boolean;
  selectedProduct: ProductEntity;
  handleSelectProduct(product: ProductEntity): void;
}

export const WeMoviesContext = createContext({} as WeMoviesContextValue);

export function WeMoviesProvider({children}: {children: React.ReactNode}) {
  const { products, getProducts, isLoading } = useProducts();
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductEntity>({} as ProductEntity);

  const handleAddProductToCart = useCallback((product: ProductEntity) => {
    toast.success('Filme adicionado com sucesso!')
    setCartItems(prevState => {
      const cartItems = [...prevState];
      const findIndex = cartItems.findIndex(item => item.id === product.id);

      if(findIndex >= 0) {
        cartItems[findIndex] = {
            ...cartItems[findIndex],
            quantity: cartItems[findIndex].quantity + 1
        };
        
        return [...cartItems];
      }

      const newProduct = {
        ...product,
        quantity: 1
      };

      return [...cartItems, newProduct];
    })
  }, []);

  const handleDecreaseProductFromCart = useCallback((product: ProductEntity) => {
    setCartItems(prevState => {
      const cartItems = [...prevState];
      const findIndex = cartItems.findIndex(item => item.id === product.id);

      if(cartItems[findIndex].quantity === 1){
        cartItems.splice(findIndex, 1);

        return cartItems;
      }
      
      cartItems[findIndex] = {
        ...cartItems[findIndex],
        quantity: cartItems[findIndex].quantity - 1
      };
          
      return [...cartItems];
    })
  }, []);

  const resetCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const totalAmount = useCallback((items: Cart[]) => {
    return items.reduce((subtotal, item) => {
      return subtotal + (item.price * item.quantity);
    }, 0);
  }, []);

  function handleSelectProduct(product: ProductEntity) {
    setSelectedProduct(product);
  }

  function handleRemoveProductFromCart(id: number) {
    toast.success('Filme removido com sucesso!')
    setCartItems(prevState => {
        return prevState.filter(item => item.id !== id)
    })
  }

  function countQuantityOfItemsInCart(id: number) {
    return cartItems.find(item => item.id === id)?.quantity
  }

  function subTotalAmount(price: number, quantity: number) {
    return price * quantity;
  }

  return (
    <WeMoviesContext.Provider value={{
      products,
      getProducts,
      cartItems,
      handleAddProductToCart,
      handleDecreaseProductFromCart,
      handleRemoveProductFromCart,
      countQuantityOfItemsInCart,
      subTotalAmount,
      totalAmount,
      resetCart,
      isLoading,
      handleSelectProduct,
      selectedProduct,
    }}
    >
      {children}
    </WeMoviesContext.Provider>
  )
}