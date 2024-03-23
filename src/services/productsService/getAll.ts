import { GetProductsInterface } from "@/types/GetProductsInterface";
import { httpClient } from "../HttpClient";

export async function getAllProducts() {
    const { data } = await httpClient.get<GetProductsInterface>('/api/movies');
    
    return data.products;
}