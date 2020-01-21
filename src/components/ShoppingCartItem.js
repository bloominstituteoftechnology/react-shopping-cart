import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

// import React, {useContext} from 'react';
// import {ItemContext} from '../contexts/ItemContext';

// function Item() {
// 	const item = useContext(ItemContext);
// 	return (
// 		<div className="shopping-cart_item">
// 			<img src={item.image} alt={`${item.title} book`} />


// 			<div>
// 				<h1>{item.title}</h1>
// 				<p>$ {item.price}</p>
// 				<button>Remove from cart</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Item;
