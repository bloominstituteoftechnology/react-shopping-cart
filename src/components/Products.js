import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react';

// Components
import Product from './Product';
import { ProductContext } from './Contexts/ProductContext';
 

const Products = () => {
	const{ products, addItem} = useContext(ProductContext);
	const { id } = useParams();
	
	const item = products.find(item => `${item.id}` === id); 
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
