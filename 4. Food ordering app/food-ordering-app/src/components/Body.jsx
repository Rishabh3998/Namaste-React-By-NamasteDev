import React from "react";
import Card from "./Card";
import data from "../data/restaurantsData";

const Body = () => {
  return (
    <div className="body">
      {data.map((restaurant) => (
        <Card {...restaurant} />
      ))}
    </div>
  );
};

export default Body;
