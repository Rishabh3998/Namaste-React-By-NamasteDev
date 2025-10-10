import React from "react";
import "../App.css";

const Card = (props) => {
  const {
    name,
    rating,
    description,
    cuisines,
    costForTwo,
    deliveryTime,
    image,
  } = props;
  return (
    <div className="card">
      <img className="card-image" src={image} alt="card-image" />
      <div className="card-content">
        <div className="card-content-top">
          <h2>{name}</h2>
          <div>{rating} ⭐️</div>
        </div>
        <p>{description}</p>
        <div>{cuisines.join(", ")}</div>
        <div className="card-content-cost">₹ {costForTwo} for two</div>
        <div className="card-content-delivery-time">{deliveryTime} minutes</div>
      </div>
    </div>
  );
};

export default Card;
