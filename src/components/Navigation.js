import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from "../contexts/CartContext";

const Navigation = () => {
	const cart = useContext(CartContext);
	
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart (added line for initial pull) <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
