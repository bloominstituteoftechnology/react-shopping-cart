import React, {useContext} from 'react';

// Components
import Product from './Product';

const Products = () => {
	console.log(props)
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
