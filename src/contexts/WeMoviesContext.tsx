import { createContext, useCallback, useState } from "react";

import { ProductEntity } from "@/entities/Product";
import { useProducts } from "@/hooks/useProducts";
import { Cart } from "@/entities/Cart";

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
}

export const WeMoviesContext = createContext({} as WeMoviesContextValue);

export function WeMoviesProvider({children}: {children: React.ReactNode}) {
  const { products, getProducts, isLoading } = useProducts();
  const [cartItems, setCartItems] = useState<Cart[]>([]);

  const handleAddProductToCart = useCallback((product: ProductEntity) => {
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

  function handleRemoveProductFromCart(id: number) {
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
      isLoading
    }}
    >
      {children}
    </WeMoviesContext.Provider>
  )
}