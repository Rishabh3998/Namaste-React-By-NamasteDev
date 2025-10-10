import React from "react";
import "../App.css";

const Subheader = () => {
  return (
    <div className="subheader">
      <input
        id="search-input"
        type="text"
        className="search-input"
        placeholder="Search for restaurants..."
      />
      <button className="search-button">🔍</button>
    </div>
  );
};

export default Subheader;
