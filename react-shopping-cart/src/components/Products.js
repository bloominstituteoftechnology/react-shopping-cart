import React, { Component } from 'react';
import axios from "axios";
// Components
import Product from './Product';

export default class Products extends Component{

	constructor(props){
		super(props)
		this.state = {
			products:{
				
			}
		}
	}
		

	

	componentDidMount(){
		axios.get(`http://localhost:3333/`)
		  .then( res =>{
			console.log(res);
			this.state.products = res.data.productsData
			// this.setState({products: res.data.productsData})
	
		  })
		  .catch( res =>{
			console.log(res);
		  })
	  };
	render(){
		return (
			<div className="products-container">
				{this.state?.products?.map(product => (
					<Product
						key={product.id}
						product={product}
						addItem={this.state?.addItem}
					/>
				))}
			</div>
		);
	}
};

