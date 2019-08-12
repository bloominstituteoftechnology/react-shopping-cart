import React, {useContext} from 'react';
import ProductContext from '../contexts/ProductContext'
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
