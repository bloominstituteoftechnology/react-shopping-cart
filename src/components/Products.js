import React, { useContext } from 'react';
//Import ProductContext
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';
//Remove props
const Products = () => {
	const { products, addItem } = useContext(ProductContext);


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
