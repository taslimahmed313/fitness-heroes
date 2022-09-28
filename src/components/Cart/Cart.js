import React from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Personal from '../Personal/Personal';
import './Cart.css';

const Cart = ({ exerciseTime }) => {
    // console.log(exerciseTime)
  return (
    <div className="cart-info">
      <Personal></Personal>
      <Break></Break>
      <Details exerciseTime={exerciseTime}></Details>
    </div>
  );
};

export default Cart;