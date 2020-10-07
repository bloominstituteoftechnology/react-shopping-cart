import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container">
	{products.map((products) => <Products key={products.id} products={products} addItem={addItem} />)}
		</div>
	);
};

export default Products;
