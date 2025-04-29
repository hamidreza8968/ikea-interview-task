import ProductList from './ProductList/ProductList';
import '../../styles/global.css';
import './Products.css';
import Spinner from "../../components/ui/Spinner/Spinner.tsx";
import Input from "../../components/ui/Input/Input.tsx";
import { useFilteredProducts } from '../../hooks/useFilteredProducts.ts';
import Pagination from "../../components/Pagination/Pagination.tsx";
import {useState} from "react";

const Products = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 8;

    const { products, totalPages, isLoading, isError, error } = useFilteredProducts(
        searchTerm,
        itemsPerPage,
        currentPage
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    if (isLoading) return <Spinner />;
    if (isError) return <div className="error">{(error as Error).message}</div>;

    return (
        <div className="container">
            <div className="page-container">
                <div>
                    <h1>Product Store</h1>
                    <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    {products.length === 0 ? (
                        <div className="no-search-results">We could not find any results matching your search.</div>
                    ) : (
                        <ProductList products={products} />
                    )}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default Products;
