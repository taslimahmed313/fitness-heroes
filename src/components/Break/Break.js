import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div>
            <p>Add a Break</p>
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