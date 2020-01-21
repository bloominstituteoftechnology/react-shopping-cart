import React, {useContext} from 'react';

// Components
import Product from './Product';

// Contexts
import {ProductContext} from '../contexts/ProductContext';

function Products()  {
	const { products, addItem } = useContext(ProductContext);
	// console.log("products: ", products);
	// console.log("add item: ", addItem);
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
