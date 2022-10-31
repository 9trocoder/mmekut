import React from "react";

function ProjectsCard({
  projectName,
  projectIcon,
  projectCategory,
  projectWorkCount,
  projectpercentage,
  projectColor,
  handleClick,
}) {
  return <>
    <div onClick={handleClick} className="projectpage__items diffbottomna">
            <div className="projectpage__items-top">
              <img src={projectIcon} alt="" />
              <div className="projectpage__items-topmiddle">
                <p className="projectpage__name">{projectName}</p>
                <p className="projectpage__category">{projectCategory}</p>
              </div>
              <div className="projectpage__workcount" style={{backgroundColor: `${projectColor}`}}>
                <p>{projectWorkCount}</p>
              </div>
            </div>
            <div className="projectpage__items-bottom">
              <div className="projectpage__items-progress">
                <div className="projectpage__items-percentage" style={{width: `${projectpercentage}`, backgroundColor: `${projectColor}`}} />
              </div>
            </div>
          </div>
  </>;
}

export default ProjectsCard;
