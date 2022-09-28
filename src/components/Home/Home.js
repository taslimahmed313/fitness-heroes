import React from 'react';
import Equipments from '../Equipments/Equipments';
import './Home.css';

const Home = () => {

    return (
      <div className='home'>
        <div className="equipments-container">
            <h2>Fitness Heroes</h2>
            <h4>Select Today's Exercise</h4>
          <Equipments></Equipments>
        </div>
        <div className="cart-container">
            
        </div>
      </div>
    );
};

export default Home;