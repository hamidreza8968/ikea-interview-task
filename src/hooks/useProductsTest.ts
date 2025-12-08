import { apiGet } from '../api/apiClient';
import { Product } from '../interfaces/IProduct';
import {useEffect, useState} from "react";

export const useProductsTest = () => {
    const [data, setData] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isFetching, setIsFetching] = useState(false);

    const fetchProducts = async () => {
        try{
            setIsFetching(true);
            const result = await apiGet<Product[]>("/products");
            setData(result);
            setError(null);
        } catch (error: any) {
            setError(error.message || "Something went wrong");
        } finally {
            setIsFetching(false);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        data,
        isLoading,
        isFetching,
        error,
        refetch: fetchProducts
    }
}