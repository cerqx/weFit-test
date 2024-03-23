import { ProductEntity } from "@/entities/Product";
import { useProducts } from "@/hooks/useProducts";
import { createContext } from "react";

interface WeMoviesContextValue {
    products: ProductEntity[];
}

export const WeMoviesContext = createContext({} as WeMoviesContextValue);

export function WeMoviesProvider({children}: {children: React.ReactNode}) {
    const { products } = useProducts();

    return (
        <WeMoviesContext.Provider value={{
            products
        }}
        >
            {children}
        </WeMoviesContext.Provider>
    )
}