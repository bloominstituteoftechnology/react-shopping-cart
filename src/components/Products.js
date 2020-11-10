import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext'
// Components
import Product from './Product';

const Products = 
() => {
	const value = useContext(UserContext);
	console.log(value);
	return (
		<div className="products-container">
			{value.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={value.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
