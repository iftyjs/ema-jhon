import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt=""/>
      <nav>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/order-review">Order Review</Link></li>
          <li><Link to="/manage-inventory">Manage Inventory</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;