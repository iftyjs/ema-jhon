import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/index';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


function Shop(props) {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const previousCart = getDatabaseCart();
    const previousCartProductKey = Object.keys(previousCart);
    const previousProducts = previousCartProductKey.map((existingKey)=>{
      const products = fakeData.find( pkey => pkey.key ===  existingKey);
      products.quantity = previousCart[existingKey];
      return products;
    });
    setCart(previousProducts);
  }, []);

  const productHandler = (product)=> {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find( pd => pd.key === toBeAddedKey );
    let count = 1;
    let newCart;
    if(sameProduct){
      count = sameProduct.quantity + 1;
      sameProduct.quantity = sameProduct.quantity + 1;
      const others = cart.filter(pd => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    }else{
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  }

  return (
    <div className="container">
      <div className="products-containers">
          {
            products.map(product => <Product product={product} productHandler={productHandler} key={product.key} showAddToCart={true}></Product>)
          }
      </div>
      <Cart cart={cart}>
        <Link to="/order-review"><button className="main-btn">Review Order</button></Link>
      </Cart>
      </div>
  );
}

export default Shop;