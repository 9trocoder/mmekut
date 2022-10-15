import React from "react";
import {otherIconWorkspace } from "../Utils/tools";

function WorkspaceCard({
  handleWorkspaceClick,
  handleOptionClick,
  workspaceName,
  workspaceDescription,
  aboutWorkspace,
  workspaceMembersImage,
  workspaceCreatorName,
  workspaceCreatorImage,
  workspaceCategory,
  workspaceColor,
  workspaceCreatorPosition,
}) {
  return (
    <>
      <div
        className="workspacecard__cnt"
        onClick={handleWorkspaceClick}
        style={{ backgroundColor: `${workspaceColor}` }}
      >
        <div className="workspacecard__cnt-top">
          <p className="workspacecard__cnt-topcategory">{workspaceName}</p>
          <button onClick={handleOptionClick}>{otherIconWorkspace}</button>
        </div>
        <div className="workspacecard__description">{workspaceDescription}</div>
        <p>{workspaceCategory}</p>
        <div className="workspacecard__cnt-middle">
          {workspaceMembersImage > 4 ? (
            <div className="workspacecard__cnt-middlememberscnt">
              {workspaceMembersImage.slice(0, 4).map((item, index) => (
                <>
                  <img
                    src={item}
                    alt=""
                    key={index}
                    className={`workspacecard__cnt-middleimage${index}`}
                  />
                </>
              ))}
              <div className="workspaceCard__cnt-middleimage-num">
                {workspaceMembersImage.length - 4}
              </div>
            </div>
          ) : (
            <div className="workspacecard__cnt-middlememberscnt">
              {workspaceMembersImage.map((item, index) => (
                <>
                  <img
                    src={item}
                    alt=""
                    key={index}
                    className={`workspacecard__cnt-middleimage${index}`}
                  />
                </>
              ))}
            </div>
          )}
        </div>
        <div className="workspacecard__cnt-bottom">
          <div className="workspacecard__cnt-bottomtop">
            <img src={workspaceCreatorImage} alt="" />
            <p>{workspaceCreatorName}</p>
            <p>{workspaceCreatorPosition}</p>
          </div>
          <p>{aboutWorkspace}</p>
        </div>
      </div>
    </>
  );
}

export default WorkspaceCard;
