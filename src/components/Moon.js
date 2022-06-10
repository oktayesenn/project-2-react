import React from "react";
import './Mars.css'

const Moon = ( {moonData} ) => {
    return (
        <div className="moon-container">
        <div className="moon-row">
            <div className="moon-image">
            <img src={moonData.img_src} alt=""/>
            </div>
            <div className="moon-info">
            <h1>{moonData.camera.name}</h1>
            <h2>{moonData.rover.name}</h2>
            <h3>{moonData.earth_date}</h3>
            </div>
        </div>
        </div>
    );
    };

    export default Moon;