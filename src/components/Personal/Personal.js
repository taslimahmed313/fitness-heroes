import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import img from '../../image/me.jpg';
import './Personal.css';
const Personal = () => {
    return (
      <div>
        <div className="personal-info">
          <div className="text-img">
            <div className="image">
              <img src={img} alt="" />
            </div>
            <div className="text-info">
              <h4>Taslim Ahmed</h4>
              <p>
                <FontAwesomeIcon className="icon-loc" icon={faLocationDot} />
                <small>Mymensing, BD</small>
              </p>
            </div>
          </div>
          <div className="body">
            <div className="body-structure">
              <span>
                59<small>kg</small>
              </span>
              <span>5.7</span>
              <span>
                22<small>yrs</small>
              </span>
            </div>
            <div className="body-structure-name">
              <span>Weight</span>
              <span>Height</span>
              <span>Age</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Personal;