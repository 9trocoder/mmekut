import React from "react";
import "./components.css";

function LinkCards({ cardName, handleClick }) {
  return (
    <>
      <div onClick={handleClick} className="linkCards__cnt">
        <p>{cardName}</p>
      </div>
    </>
  );
}

export default LinkCards;
