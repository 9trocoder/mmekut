import React from "react";
import { dividerr } from "../Utils/tools";
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
          {taskImage.length > 2 ? (
            <div className="taskimage__image_cnt">
              {taskImage.slice(0, 2).map((item, index) => (
                <>
                  <img
                    className={`taskimage${index}`}
                    key={index}
                    src={item}
                    alt=""
                  />
                </>
              ))}
              <div className="taskimage__image-remaining">
                {taskImage.length - 2}
              </div>
            </div>
          ) : (
            <div className="taskimage__image_cnt">
              {taskImage.map((item, index) => (
                <>
                  <img
                    className={`taskimage${index}`}
                    key={index}
                    src={item}
                    alt=""
                  />
                </>
              ))}
            </div>
          )}
        </div>
        {dividerr}
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
