import React from 'react';
import { Shopping } from '../App'
// Components
import Product from './Product';

const Products = props => {

	return (
		<Shopping.Consumer>
			{(value) => (
				<div className="products-container">
					{value.products.map(product => (
						<Product
							key={product.id}
							product={product}
							addItem={value.addItem}
						/>
					))}
				</div>
			)}
		</Shopping.Consumer>
	);
};

export default Products;
