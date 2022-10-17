import React from "react";
import {  otherIconTask } from "../Utils/tools";

function TaskCard({
  organizationImage,
  organizationName,
  taskCreatorName,
  taskCreationTime,
  taskDescription,
  taskImage,
  assigneeImage,
}) {
  return (
    <>
      <div className="taskcard__cnt diffbottomna">
        <div className="taskcard__cnt-left">
          <img src={organizationImage} alt="" />
        </div>
        <div className="taskcard__cnt-right">
          <div className="taskcard__cnt-righttop">
            <div className="taskcard__cnt-righttopleft">
              <p className="taskcard__organisationname">{organizationName}</p>
              <p className="taskcard__taskcreatorname">{taskCreatorName}</p>
              <p className="taskcard__taskcreationtime">{taskCreationTime}</p>
            </div>
            <button>{otherIconTask}</button>
          </div>
          <div className="taskcard__cnt-description">
            <p className="taskcard__taskdescription">{taskDescription}</p>
          </div>
          <div className="taskcard__cnt-images">
            {taskImage.map((item, index) => (
              <img src={item} alt="" key={index} />
            ))}
          </div>
          <div className="taskcard__cnt-assigneeimage">
            {assigneeImage.length > 4 ? (
              <div className="taskcard__cnt-middlememberscnt">
                {assigneeImage.slice(0, 4).map((item, index) => (
                  <>
                    <img
                      src={item}
                      alt=""
                      key={index}
                      className={`taskcard__cnt-middleimage${index}`}
                    />
                  </>
                ))}
                <div className="taskcard__cnt-middleimage-num">
                  {assigneeImage.length}+
                </div>
              </div>
            ) : (
              <div className="taskcard__cnt-middlememberscnt">
                {assigneeImage.map((item, index) => (
                  <>
                    <img
                      src={item}
                      alt=""
                      key={index}
                      className={`taskcard__cnt-middleimage${index}`}
                    />
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
