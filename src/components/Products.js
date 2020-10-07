import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

//import Products from './Products'

const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container">
	{products.map((product) => <Products key={product.id} product={product} addItem={addItem} />)}
		</div>
	);
};

export default Products;
