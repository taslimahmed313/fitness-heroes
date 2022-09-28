import React, { useEffect, useState } from 'react';
import Equipment from '../Equipment/Equipment';
import './Equipments.css';

const Equipments = () => {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
      fetch("equipments.json")
        .then((res) => res.json())
        .then((data) => setEquipments(data));
    }, []);
    return (
      <div>
        <div>
          <h2 className="club-name">Fitness-Heroes</h2>
          <h4>Select Today's Exercise</h4>
        </div>
        <div className="equipment-container">
          {equipments.map((equipment) => (
            <Equipment equipment={equipment} key={equipment.id}></Equipment>
          ))}
        </div>
      </div>
    );
};

export default Equipments;