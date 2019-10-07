import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext'
import Product from './Product';

//uses props.product


const Products = () => {
	const {products, addItem}=useContext(ProductContext)
	console.log(`products products`, products)
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
