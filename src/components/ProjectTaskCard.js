import React from "react";
import { calendarIconSmall, commentIcon } from "../Utils/tools";
import "./components.css";

function ProjectTaskCard({ taskTitle, taskDate, numComments, assigneeImages }) {
  return (
    <>
      <div className="projecttaskcard__cnt ">
        <div className="projecttaskcard__top">
          <p className="projecttaskcard__title">{taskTitle}</p>
          {numComments >= 1 ?(
            <div className="projecttaskcard__comments">
              <p className="projecttaskcard__numcomments">{numComments}</p>
              <div className="">{commentIcon}</div>
              
            </div>
          ) : <></>}
        </div>
        <div className="projecttaskcard__bottom">
          <div className="projecttaskcard__date">
            <div className="">{calendarIconSmall}</div>
            
            <p className="projecttaskcard__taskdate">{taskDate}</p>
          </div>
          <div className="projecttaskcard__assignee">
            {assigneeImages.length > 4 ? (
              <div className="projecttaskcard__assigneecnt">
                {assigneeImages.slice(0, 4).map((item, index) => (
                  <>
                    <img
                      src={item}
                      alt=""
                      key={index}
                      className="projecttaskcard__asigneeimages"
                    />
                  </>
                ))}
                <div className="projecttaskcard__assignneimage-num">
                  +{assigneeImages.length - 4}
                </div>
              </div>
            ) : (
              <div className="projecttaskcard__assigneecnt projecttcimage">
                {assigneeImages.map((item, index) => (
                  <>
                    <img
                      src={item}
                      alt=""
                      key={index}
                      className="projecttaskcard__asigneeimages "
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

export default ProjectTaskCard;
