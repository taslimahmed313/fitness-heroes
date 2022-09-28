import React, { useState } from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Personal from '../Personal/Personal';
import './Cart.css';

const Cart = ({ exerciseTime }) => {

    const [breakTime, setBreakTime] = useState(0);

    const handleBreakTime = (value) =>{
        setBreakTime(value);
    }
    
  return (
    <div className="cart-info">
      <Personal></Personal>
      <Break handleBreakTime={handleBreakTime}></Break>
      <Details exerciseTime={exerciseTime} breakTime={breakTime}></Details>
    </div>
  );
};

export default Cart;