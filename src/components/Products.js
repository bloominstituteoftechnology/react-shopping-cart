import React, { useContext } from 'react';

// Components
import Product from './Product';

import ProductsContext from "../contexts/products";
import CartContext from "../contexts/cart"

const Products = props => {
	const productsContext = useContext(ProductsContext);
	const cartContext = useContext(CartContext);

	const addToCart = product => {
		cartContext.addToCart(product);
	}

	return (
		<div className="products-container">
			{productsContext.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addToCart={addToCart}
				/>
			))}
		</div>
	);
};

export default Products;
