import { ProductListProps } from '../../../interfaces/IProduct.ts';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem.tsx";
import { memoize } from "../../../utils/memoize";

const ProductList= ({ products } : ProductListProps) => {

    const slowFn = (a, b) => {
        console.log("calculating ...");
        return a + b;
    }
    const fastFn = memoize(slowFn);
    fastFn(6,5);
    fastFn(2,5);
    fastFn(2,5);
    fastFn(2,8);

    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
