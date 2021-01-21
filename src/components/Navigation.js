import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
//Import CartContext
import { CartContext } from '../contexts/CartContext';


const Navigation = (props) => {
	const cart = useContext(CartContext)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
