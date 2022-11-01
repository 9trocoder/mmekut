import React from "react";
import { headerBackIcon, headerNotificationIcon, otherIcon } from "../Utils/tools";
import "./components.css"

function ProjectHeader({
  handleCloseClick,
  projectImage,
  projectName,
  projectCategory,
  handleMoreIcon,
  notifications,
}) {
  return (
    <>
        <div className="projectheader__top diffbottomna">
          <div className="projectbackbtn">
            <button onClick={handleCloseClick}>{headerBackIcon}</button>
          </div>
          <div className="projectdetails__top">
            <img src={projectImage} alt="" />
            <div className="projectdetails__middle">
              <p className="projectdetails_name">{projectName}</p>
              <p className="projectdetails_category">{projectCategory}</p>
            </div>
            <div className="projectdetails__right">
              <div className="projectdetails__notf">
                <button>{headerNotificationIcon}</button>
                <div className="projnofication" />
              </div>
              <button>{otherIcon}</button>
            </div>
          </div>
      </div>
    </>
  );
}

export default ProjectHeader;
