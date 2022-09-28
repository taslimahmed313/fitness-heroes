import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import Equipment from '../Equipment/Equipment';
import './Equipments.css';

const Equipments = ({ handleExerciseTime }) => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch("equipments.json")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="club-name">
          <FontAwesomeIcon className="icon-dum" icon={faDumbbell} />
          Fitness-Heroes
        </h2>
        <h4>Select Today's Exercise</h4>
      </div>

      <div className="equipment-container">
        {equipments.map((equipment) => (
          <Equipment
            equipment={equipment}
            key={equipment.id}
            handleExerciseTime={handleExerciseTime}
          ></Equipment>
        ))}
      </div>
    </div>
  );
};

export default Equipments;