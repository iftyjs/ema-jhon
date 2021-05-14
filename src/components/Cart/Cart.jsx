import React from 'react';
import './Cart.css';

export default function Cart(props) {
  const itemPrice = props.cart.reduce((total, item)=> total + (item.price * item.quantity) , 0);

  let shipping = 0;
  if(itemPrice > 20){
    shipping = 4.99;
  }else if(itemPrice > 0){
    shipping = 12.99;
  }else{
    shipping = 0;
  }

  const tax = (itemPrice / 10)

  const priceFormat = (price) => {
    const amount = price.toFixed(2);
    return Number(amount);
  }

  return (
      <div className="cart-containers">
        <h2 style={{textAlign: 'center'}}>Order Summary</h2>
        <h3>Items ordered: {props.cart.length}</h3>
        <p><small>Items: {priceFormat(itemPrice)}	</small></p>
        <p><small>Shipping & Handling:	{shipping}</small></p>
        <p><small>Total before tax:	{priceFormat(itemPrice + shipping)}</small></p>
        <p><small>Estimated Tax: {priceFormat(tax)}</small></p>
        <p className="total">Order Total: {priceFormat(itemPrice + shipping + tax)}</p>
        {
          props.children
        }
      </div>
  )
}
