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
        <div className='equipments'>
            {
                equipments.map(equipment => <Equipment 
                    equipment={equipment}
                    key={equipment.id}
                    ></Equipment>)
            }
        </div>
    );
};

export default Equipments;