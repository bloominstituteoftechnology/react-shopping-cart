import React from 'react';
import {shoppingContext} from "../App"
// Components
import Product from './Product';

const Products = props => {
	return (
		<shoppingContext.Consumer>
			{({products}) =>{
				return (
					<div className="products-container">
						{products.map(product => (
									<Product
											key={product.id}
											product={product}
											addItem={props.addItem}
										/>
								))}
						</div>
				);
			}

			}
		</shoppingContext.Consumer>
	);
};

export default Products;
