import React from "react";
import "./components.css";

function HeaderWithButton({ headerName, headerButtonName, handleClick }) {
  return (
    <>
      <div className="headerwithbutton__cnt">
        <p className="headerwithbutton__cnt-title">{headerName}</p>
        <button onClick={handleClick} className="headerwithbutton__cnt-viewall">
          {headerButtonName}
        </button>
      </div>
    </>
  );
}

export default HeaderWithButton;
