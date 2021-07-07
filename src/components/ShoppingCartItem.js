import React from 'react';

const Item = props => {
	const clicky = (e) =>{
		e.preventDefault();
		props.remove(props.id);
	}
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />

			<div>
				{console.log('sci',props)}
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={clicky}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
