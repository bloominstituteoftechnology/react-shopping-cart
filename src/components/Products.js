import React, {useContext} from 'react';

// Components
import Product from './Product';

//context
import ProductContext from '../context/ProductContext';


const Products = () => {
	const {products, addItem} = useContext(ProductContext)
	// const {products, addItem} = useContext(ProductContext)
	console.log(products)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItems={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
