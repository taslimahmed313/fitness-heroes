import React, { useState } from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Personal from '../Personal/Personal';
import './Cart.css';

const Cart = ({ exerciseTime }) => {

    const [breakTime, setBreakTime] = useState(0);
    const [cart, setCart] = useState();

    // useEffect(()=>{
    //    const storedBreak = localStorage.getItem("time");
    //    setCart(storedBreak);
    // },[breakTime])

    const breakTimeStored = localStorage.getItem('time');
    

    const handleBreakTime = (value) =>{  
        localStorage.setItem('time', value);
        setBreakTime(value);
    }
    // console.log(breakTime)
    console.log(cart);
    
  return (
    <div className="cart-info">
      <Personal></Personal>
      <Break handleBreakTime={handleBreakTime}></Break>
      <Details exerciseTime={exerciseTime} breakTimeStored={breakTimeStored}></Details>
    </div>
  );
};

export default Cart;