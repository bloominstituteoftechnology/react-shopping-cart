import React, { useContext } from 'react';
import ContextProduct from '../contexts/ContextProduct';

// Components
import Product from './Product';



const Products = () => {

	const productData = useContext(ContextProduct);

	return (
		<div className="products-container">
			{productData.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={productData.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
