import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Equipments from '../Equipments/Equipments';
import './Home.css';

const Home = () => {

    const [exerciseTime, setExerciseTime] = useState([]);

    const handleExerciseTime = (equipment) =>{
        const newExerciseTime = [...exerciseTime, equipment]
        setExerciseTime(newExerciseTime);

    }

    return (
      <div className="home">
        <div className="equipments-container">
          <Equipments handleExerciseTime={handleExerciseTime}></Equipments>
        </div>
        
        <div className="cart-container">
          <Cart exerciseTime={exerciseTime}></Cart>
        </div>
      </div>
    );
};

export default Home;