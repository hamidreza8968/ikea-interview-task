import { useProducts } from './useProducts';

export const useFilteredProducts = (searchTerm: string, itemsPerPage: number, currentPage: number) => {
    const { data: products = [], isLoading, isError, error } = useProducts();

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const displayedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return {
        products: displayedProducts,
        totalPages,
        isLoading,
        isError,
        error
    };
};
