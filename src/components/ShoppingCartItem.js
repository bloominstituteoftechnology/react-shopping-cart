import React from 'react';

const Item = props => {
	console.log("Item.js props", props.removeItem)
	return (
		<div className="shopping-cart_item" key ={props.id}>
			<img src={props.image} alt={`${props.title} book`} />


			<div key ={props.id}>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => props.removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
