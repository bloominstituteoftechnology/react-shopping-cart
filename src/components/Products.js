// importing 'useContext
import React, { useContext } from 'react';
// importing 'ProductContext'
import { ProductContext } from "../contexts/ProductContext";


// Components
import Product from './Product';


const Products = () => {
	// calling the useContext hook and passing in the context object
const { products, addItem } = useContext(ProductContext);
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
