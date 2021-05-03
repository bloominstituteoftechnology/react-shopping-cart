import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.products.image} alt={`${props.products.title} book`} />


			<div>
				<h1>{props.products.title}</h1>
				<p>$ {props.products.price}</p>
				<button onClick={()=>{
					props.removeFromCart(props)
				}}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
