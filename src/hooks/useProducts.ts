import { useEffect, useState } from "react";

import { ProductEntity } from "@/entities/Product";
import { productsService } from "@/services/productsService";

export function useProducts() {
    const [products, setProducts] = useState<ProductEntity[]>([]);

    async function getProducts() {
        const data = await productsService.getAllProducts();
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return {
        products,
        setProducts
    }
}