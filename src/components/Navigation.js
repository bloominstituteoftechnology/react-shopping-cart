import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CartContext from "../contexts/cart"

const Navigation = props => {
	let context = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{context.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
