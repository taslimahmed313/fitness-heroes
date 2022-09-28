import React from 'react';
import './Details.css';

const Details = () => {
    return (
        <div className='exercise-timing'>
            <p>Exercise Details</p>
            <div className='time-spend'>
                <p>Exercise Time</p>
                <span>00 seconds</span>
            </div>
            <div className='time-spend'>
                <p>Break Time</p>
                <span>00 seconds</span>
            </div>
            <button>Activity Completed</button>
        </div>
    );
};

export default Details;