import React from 'react';
import swal from "sweetalert";
import './Details.css';

const Details = ({ exerciseTime, breakTime }) => {
    // console.log(exerciseTime);
    let total = 0;
    for(const equipment of exerciseTime){
        total = total + equipment.time;
    }
    const handleActivity = () =>{
        swal("Great Work!", "You Completed The Activity !", "success");
    }
  return (
    <div className="exercise-timing">
      <p>Exercise Details</p>
      <div className="time-spend">
        <p>Exercise Time</p>
        <span>{total} seconds</span>
      </div>
      <div className="time-spend">
        <p>Break Time</p>
        <span>{breakTime} seconds</span>
      </div>
      <button onClick={handleActivity}>Activity Completed</button>
    </div>
  );
};

export default Details;