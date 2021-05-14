import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/index';
import thankYouImage from '../../images/giphy.gif';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';

function Review(props) {
  const [cart, setCart] = useState([]);
  const [thankyou, setThankyou] = useState(false);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const key = Object.keys(savedCart);
    const getProduct = key.map((key)=> {
        const products = fakeData.find(pd=> pd.key === key);
        products.quantity = savedCart[key];
        return products;
      });
    setCart(getProduct);
  }, [])

  const handleRemoveProduct = (productKey) => {
    const newCart = cart.filter( pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }

  const handleCheckout = () => {
    setCart([]);
    processOrder();
    setThankyou(true);
  }

  let thank;
  if(thankyou){
    thank = <img src={thankYouImage} alt=""/>
  }

  return (
    <div>
        <div className="container">
          <div className="products-containers" style={{borderBottom:'1px solid lightgray', paddingBottom: '50px'}}>
          {
            cart.map(product=>
              <div key={product.key} className="product">
                <div className="product-details">
                  <h3 className="product-name">${product.name}</h3>
                  <p><small>Price : {product.price}</small></p>
                  <p>Quantity : {product.quantity}</p>
                  <button onClick={()=>handleRemoveProduct(product.key)} className='main-btn'>Remove Product</button>
                </div>
              </div>
            )
          }
          {thank}
        </div>
        <div className="cart-containers">
          <Cart cart={cart}>
            <Link to="/order-review"><button onClick={handleCheckout} className="main-btn">Checkout</button></Link>
          </Cart>
        </div>
      </div>
    </div>
  );
}

export default Review;