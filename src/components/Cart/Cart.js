import React from 'react';
import Break from '../Break/Break';
import Personal from '../Personal/Personal';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart-info'>
            <Personal></Personal>
            <Break></Break>
        </div>
    );
};

export default Cart;