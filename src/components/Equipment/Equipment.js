import React from 'react';
import './Equipment.css';

const Equipment = ({ equipment, handleExerciseTime }) => {
  const { img, name, age, time } = equipment;
  return (
    <div className="equipment">
      <img src={img} alt="" />
      <div className="equipment-info">
        <h4>{name}</h4>
        <p>For Age : {age}</p>
        <p>Time Required : {time}s</p>
      </div>
      <button onClick={()=>handleExerciseTime(equipment)}>Add To List</button>
    </div>
  );
};

export default Equipment;