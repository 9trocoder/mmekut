import React from "react";
import "./components.css";

function TaskListCard({
  projectName,
  taskTitle,
  taskDescription,
  taskImage,
  taskDate,
  deleteIcon,
  priority,
  handleClick,
  handleDeleteClick,
}) {
  return (
    <>
      <div className="taskListCard__cnt">
        <div onClick={handleClick} className="taskListCard__cnt-top">
          <div className="taskListCard__cnt-topleft">
            <p>{projectName}</p>
            <p>{taskTitle}</p>
            <p>{taskDescription}</p>
          </div>
          <img src={taskImage} alt="" />
        </div>
        <div className="taskListCard__cnt-bottom">
          <div className="taskListCard__cnt-bottomleft">
            <p>{taskDate}</p>
          </div>
          <div className="taskListCard__cnt-bottommiddle">
            <p>PRIORITY</p>
            <p>{priority}</p>
          </div>
          <button onClick={handleDeleteClick}>{deleteIcon}</button>
        </div>
      </div>
    </>
  );
}

export default TaskListCard;
