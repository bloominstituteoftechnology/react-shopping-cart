import React, {useContext} from 'react';
import ProductContext from '../context/ProductContext';

const Product = props => {
	const {removeItem} = useContext(ProductContext)
	const remove = () => {
		removeItem()
	}
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
			<button onClick={remove}>Remove Item</button>
		</div>
	);
};

export default Product;
