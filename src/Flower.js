import React from "react";
import "./styles/flower.css";

function Flower({ name, imageurl, price }) { 
    return (
        <div className="flower-banner">
            <img src={imageurl} alt={name} className="flower-image" />
            <h3 className="flower-name">{name}</h3>
            <p className="flower-price">Price: {price} griven</p>
        </div>
    );
}

export default Flower;
