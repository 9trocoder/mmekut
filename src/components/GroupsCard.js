import React from "react";
import "./components.css";

function GroupsCard({
  groupUserImages,
  groupName,
  handleClick,
  notificationIcon,
}) {
  return (
    <>
      <div className="groupsCard__cnt" onClick={handleClick}>
        <div className="groupsCard__cnt-top">
          <div className="groupsCard__cnt-topleft">
            <p className="groupsCard__cnt-topgroupname">{groupName}</p>
          </div>
          <div className="groupsCard__cnt-topnotification">
            {notificationIcon}
          </div>
        </div>
        <div className="letseeamlike">
          {groupUserImages.length > 4 ? (
            <div className="selected__image_cntt">
              {groupUserImages.slice(0, 4).map((item, index) => (
                <>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    className={`image${index}`}
                    key={index}
                    src={item}
                    alt=""
                  />
                </>
              ))}
              <div
                style={{ width: "40px", height: "40px" }}
                className="selected__image-remaining"
              >
                {groupUserImages.length - 4}
              </div>
            </div>
          ) : (
            <div className="selected__image_cntt">
              {groupUserImages.map((item, index) => (
                <>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    className={`image${index}`}
                    key={index}
                    src={item}
                    alt=""
                  />
                </>
              ))}
            </div>
          )}
          <p className="groupsCard__cnt-topgroupmembers">
            {groupUserImages.length} Members
          </p>
        </div>
      </div>
    </>
  );
}

export default GroupsCard;
