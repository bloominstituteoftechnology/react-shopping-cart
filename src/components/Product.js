import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';

const Product = () => {
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="product">
			<img src={product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{product.title}</h1>

			<p className="price">${product.price}</p>

			<button onClick={() => props.addItem(product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
