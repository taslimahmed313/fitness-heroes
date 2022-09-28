import React from 'react';
import './Equipment.css';

const Equipment = ({equipment}) => {
    const {img, name} = equipment;
    return (
        <div className='equipment'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Equipment;