import React, {Component} from 'react';

export default class Product extends Component {

	constructor(props){
		super(props)
		this.state = {
			products:{
				
			}
		}
	}




	render(){
		return (
			<div className="product">
				<img src={this.props.product.image} alt={`${this.props.product.title} book`} />
	
				<h1 className="title">{this.props.product.title}</h1>
	
				<p className="price">${this.props.product.price}</p>
	
				<button onClick={() => this.props.addItem(this.props.product)}>
					Add to cart
				</button>
			</div>
		);
	}


};
