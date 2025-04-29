import {useProducts} from '../../hooks/useProducts';
import ProductList from '../../components/ProductList/ProductList';
import '../../styles/global.css';
import './Products.css';
import Spinner from "../../components/ui/Spinner/Spinner.tsx";

const Products = () => {
    const {data: products = [], isLoading, isError, error} = useProducts();

    if (isLoading) return <Spinner/>;
    if (isError) return <div className="error">{(error as Error).message}</div>;

    return (
        <div className="container">
            <div className="page-container">
                <div>
                <ProductList products={products}/>
                </div>
            </div>
        </div>
    );
};

export default Products;
