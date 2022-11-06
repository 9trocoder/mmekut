import React from "react";
import { calendarIconSmall, commentIcon } from "../Utils/tools";
import "./components.css";

function ProjectTaskCard({ taskTitle, taskDate, numComments, assigneeImages }) {
  return (
    <>
      <div className="projecttaskcard__cnt diffbottomna">
        <div className="projecttaskcard__top">
          <p className="prjecttaskcard__title">{taskTitle}</p>
          <div className="projecttaskcard__comments">
            <p className="projecttaskcard__numcomments">{numComments}</p>
            {commentIcon}
          </div>
        </div>
        <div className="projecttaskcard__bottom">
          <div className="projecttaskcard__date">
            {calendarIconSmall}
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
              <div className="projecttaskcard__assigneecnt">
                {assigneeImages.map((item, index) => (
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
                  {assigneeImages.length}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectTaskCard;
