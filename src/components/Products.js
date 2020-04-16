import React, { useContext } from 'react';

// Components
import Product from './Product';

import ProductContext from '../contexts/ProductContext.js'

const Products = props => {
	const products = useContext(ProductContext)
	console.log(products)
	return (
		<div className="products-container">
			{products.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={products.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
