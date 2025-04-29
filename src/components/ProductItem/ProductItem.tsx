import {ProductItemProps} from '../../interfaces/IProduct';
import './ProductItem.css';
import {useState} from "react";

const ProductItem = ({product}: ProductItemProps) => {
    const [isFullTitle, setIsFullTitle] = useState<boolean>(false);

    return (
        <div key={product.id} className="product-card" onMouseEnter={() => setIsFullTitle(true)}
             onMouseLeave={() => setIsFullTitle(false)}>
            <img className="product-card-img" src={product.image} alt={product.title}/>
            <h3 className={isFullTitle ? 'full-title' : 'product-card-title'}>{product.title}</h3>
            <p className="product-card-price">${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductItem;
