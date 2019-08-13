import React, {useContext} from 'react';
import {CartContext} from '../Contexts/CartContext';


const Item = props => {
	const {cart, removeItem} = useContext(CartContext);
	function onClick (event){
		removeItem(props.id);
	}
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={onClick}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
