import React, {useContext } from 'react';
import { ProductContext} from "../contexts/ProductContext"



const Product = () => {

const [product,addItem]  = useContext(ProductContext)

	return (
		<div className="product">
			<img src={product.image} alt={`${product.title} book`} />

			<h1 className="title">{product.title}</h1>

			<p className="price">${product.price}</p>

			<button onClick={() =>addItem(product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
