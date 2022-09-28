import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div>
            <h4>Add a Break</h4>
            <div className='btn-break'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
        </div>
    );
};

export default Break;