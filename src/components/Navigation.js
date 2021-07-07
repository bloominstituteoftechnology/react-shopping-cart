
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';



const Navigation = () => {
	const cart = useContext(UserContext);
	return (
		<div className="navigation">
			{console.log(cart)}
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
