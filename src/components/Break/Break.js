import React from 'react';
import './Break.css';

const Break = ({ handleBreakTime }) => {
  return (
    <div>
      <p>Add a Break</p>
      <div className="btn-break">
        <button onClick={() => handleBreakTime(10)}>10s</button>
        <button onClick={() => handleBreakTime(20)}>20s</button>
        <button onClick={() => handleBreakTime(30)}>30s</button>
        <button onClick={() => handleBreakTime(40)}>40s</button>
        <button onClick={() => handleBreakTime(50)}>50s</button>
      </div>
    </div>
  );
};

export default Break;