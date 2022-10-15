import React from "react";
import { otherIconWorkspace } from "../Utils/tools";

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
        <div className="workspacecard__description"><p>{workspaceDescription}</p></div>
        <p className="workspacecard__category">{workspaceCategory}</p>
        <div className="workspacecard__cnt-middle">
          
          {workspaceMembersImage.length > 4 ? (
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
                {workspaceMembersImage.length} Members
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
              <div className="workspaceCard__cnt-middleimage-num">
                {workspaceMembersImage.length} Members
              </div>
            </div>
          )}
        </div>
        <div className="workspacecard__cnt-bottom">
          <div className="workspacecard__cnt-bottomtop">
            <img src={workspaceCreatorImage} alt="" />
            <p className="workspacecard__creatorname">{workspaceCreatorName}</p>
            <p className="workspacecard__creatorposition">
              {workspaceCreatorPosition}
            </p>
          </div>
          <p className="workspacecard__aboutworkspace">{aboutWorkspace}</p>
        </div>
      </div>
    </>
  );
}

export default WorkspaceCard;
