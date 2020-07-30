import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';

const Item = () => {
	const { products, addItem } = useContext(ProductContext);
	console.log('from Item', products);
	return (
		<div className="shopping-cart_item">
			<img src={products.image} alt={`${products.title} book`} />


			<div>
				<h1>{products.title}</h1>
				<p>$ {products.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
