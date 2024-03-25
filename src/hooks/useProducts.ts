import { useEffect, useState } from "react";

import { ProductEntity } from "@/entities/Product";
import { productsService } from "@/services/productsService";

export function useProducts() {
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getProducts() {
    try {
      setIsLoading(true);
      const data = await productsService.getAllProducts();
      setProducts(data);
    } catch (err) {
        //
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return {
    products,
    getProducts,
    isLoading
  }
}