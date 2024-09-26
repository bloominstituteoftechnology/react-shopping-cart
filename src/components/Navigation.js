import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shopping } from '../App'

const Navigation = () => {
	return (

		<Shopping.Consumer>
			{(value) => (
				<div className="navigation">
					<NavLink to="/">Products</NavLink>
					<NavLink to="/cart">
						Cart <span>{value.cart.length}</span>
					</NavLink>
				</div>
			)}
		</Shopping.Consumer>
	);
};

export default Navigation;
