import React, { useContext } from 'react';

// Components
import Product from './Product';

//useContent
import { ProductContext } from '../contexts/ProductContext'

const Products = () => {
	const value = useContext(ProductContext);
	const { products, addItem } = value;

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;