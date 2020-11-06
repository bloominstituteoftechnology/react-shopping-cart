import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shopping } from '../App'

const Navigation = props => {
	return (
		<Shopping.Consumer>
			{(value) => (
				<div className="navigation">
					<NavLink to="/">Products</NavLink>
					<NavLink to="/cart">
						Cart <span>{props.cart.length}</span>
					</NavLink>
				</div>
			)}
		</Shopping.Consumer>
	);
};
export default Navigation;
