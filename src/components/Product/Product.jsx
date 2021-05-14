import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'react-router-dom';
import './Product.css';

function Product(props) {
  const { name, img, seller, price, stock, key, showAddToCart } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
        <br />
        <p><small>by: {seller}</small></p>
        <p>${price}</p>
        <p>only {stock} left in stock - order soon</p>
        {props.showAddToCart && <button className="main-btn" onClick={()=>props.productHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
      </div>
    </div>
  );
}

export default Product;
