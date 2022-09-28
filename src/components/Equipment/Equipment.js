import React from 'react';
import './Equipment.css';

const Equipment = ({equipment}) => {
    const {img, name, age, time} = equipment;
    return (
      <div className="equipment">
        <img src={img} alt="" />
        <div className="equipment-info">
          <h4>{name}</h4>
          <p>For Age : {age}</p>
          <p>Time Required : {time}</p>
        </div>
        <button>Add To List</button>
      </div>
    );
};

export default Equipment;