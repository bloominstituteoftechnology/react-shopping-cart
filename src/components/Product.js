import React from 'react';

const Product = ( {product, addItem} ) => {
	return (
		<div className="product">
			<img src={product.image} alt={`${product.title} book`} />

			<h1 className="title">{product.title}</h1>

			<p className="price">${product.price}</p>

			<button onClick={() => addItem(product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
