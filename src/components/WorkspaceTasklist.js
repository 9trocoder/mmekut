import React from "react";
import ProgressBar from "./ProgressBar";

function WorkspaceTasklist({ projectName, handleClick, numtask, progressNumber }) {
  return (
    <>
      <div onClick={handleClick} className="workspaceTasklist__cnt">
        <p>{projectName}</p>
        <div className="workspaceTasklist__cnt-right">
          <p>{numtask}</p>
          <ProgressBar
            progress={progressNumber}
            circleHeight="25"
            circleWidth="25"
            borderWidth="2.5px"
            borderColor="#0184fb"
            strokeColor="#0184fb"
          />
        </div>
      </div>
    </>
  );
}

export default WorkspaceTasklist;
