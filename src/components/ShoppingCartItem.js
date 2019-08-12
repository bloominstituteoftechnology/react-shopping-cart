import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<p>Quantity: {props.quantity}</p>
				<button onClick = {_ => props.removeFromCart(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
