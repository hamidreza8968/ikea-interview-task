import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api/apiClient';
import { Product } from '../interfaces/IProduct';

export const useProducts = () => {
    return useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: () => apiGet<Product[]>('/products'),
        staleTime: 1000 * 60 * 5
    });
};
