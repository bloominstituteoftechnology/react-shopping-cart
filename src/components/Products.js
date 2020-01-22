import React, { useContext } from 'react';
import Product from './Product';

const Products = props => {
  
  // Contexts
  import { ProductContext } from '../contexts/ProductContext';

  function Products() {
    const { products, addItem } = useContext(ProductContext);
    // console.log("products: ", products);
    // console.log("add item: ", addItem);
    return (
      <div className="products-container">
        {props.products.map(product => (
          {
            products.map(product => (
              <Product
                key={product.id}
                product={product}
                addItem={props.addItem}
                addItem={addItem}
              />
            ))
          }
			</div>


