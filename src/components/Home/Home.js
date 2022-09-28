import React from 'react';
import Cart from '../Cart/Cart';
import Equipments from '../Equipments/Equipments';
import './Home.css';

const Home = () => {

    return (
      <div className="home">
        <div className="equipments-container">
          
          <Equipments></Equipments>
        </div>
        <div className="cart-container">
          <Cart></Cart>
        </div>
      </div>
    );
};

export default Home;