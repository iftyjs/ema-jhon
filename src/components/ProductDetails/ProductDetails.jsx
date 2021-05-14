import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';

function ProductDetails(props) {
  const {key} = useParams();
  const productDetails = fakeData.find(pd => pd.key === key);
  return (
    <div>
      <Product product={productDetails}></Product>
    </div>
  );
}

export default ProductDetails;