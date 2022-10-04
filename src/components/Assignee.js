import React from "react";

function Assignee({ userImage, userName, userPosition, assigneechecked }) {
  return (
    <>
      <div className="assignee__cnt">
        <div className="assignee__left">
          <img src={userImage} alt="" />
          <div className="assignee__left-profile">
            <p>{userName}</p>
            <p>{userPosition}</p>
          </div>
        </div>
        <label className="round-checkbox">
            
        </label>
      </div>
    </>
  );
}

export default Assignee;
