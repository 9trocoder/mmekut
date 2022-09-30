import React from "react";

import "./components.css";

export const HeaderBar = ({
  backIcon,
  headerText,
  addIcon,
  calendarIcon,
  notificationIcon,
  handleCalendarClick,
  handleNotificationClick,
  handleBackClick,
  handleAddClick,
}) => {
  return (
    <>
      <div className="headerBar__cnt">
        <div className="headerBar__cnt-left">
          <button onClick={handleBackClick}>{backIcon}</button>
          <p>{headerText}</p>
        </div>
        <div className="headerBar__cnt-right">
          <button onClick={handleAddClick}>{addIcon}</button>
          <button onClick={handleCalendarClick}>{calendarIcon}</button>
          <button onClick={handleNotificationClick}>{notificationIcon}</button>
        </div>
      </div>
    </>
  );
};



export const ChatHeader = ({
  backIcon,
  handleBackClick,
  handleProfileClick,
  userImage,
  userName,
  searchIcon,
  moreIcon,
  handleSearchIconClick,
  handleMoreIconClick,
  userStatus,
}) => {
  return (
    <>
      <div className="chatheader__cnt">
        <div className="chatheader__left">
          <button onClick={handleBackClick}>{backIcon}</button>
          <div
            onClick={handleProfileClick}
            className="chatheader__left-profile"
          >
            <div className="chatheader__left-image">
              <img src={userImage} alt="" />
              {userStatus && <div className="chatheader__status" />}
            </div>
            <p>{userName}</p>
          </div>
        </div>

        <div className="chatheader__right">
          <button onClick={handleSearchIconClick}>{searchIcon}</button>
          <button onClick={handleMoreIconClick}>{moreIcon}</button>
        </div>
      </div>
    </>
  );
};

export const BottomNav = ({
  homeIcon,
  taskIcon,
  addIcon,
  chatIcon,
  profileIcon,
  handleHomeClick,
  handleTaskClick,
  handleAddClick,
  handleChatClick,
  handleProfileClick,
}) => {
  return (
    <>
      <div className="bottomnav__cnt">
        <div onClick={handleHomeClick} className="bottomnav__cnt-item">
          <button>{homeIcon}</button>
        </div>
        <div onClick={handleTaskClick} className="bottomnav__cnt-item">
          <button>{taskIcon}</button>
        </div>
        <div onClick={handleAddClick} className="bottomnav__cnt-item">
          <button>{addIcon}</button>
        </div>
        <div onClick={handleChatClick} className="bottomnav__cnt-item">
          <button>{chatIcon}</button>
        </div>
        <div onClick={handleProfileClick} className="bottomnav__cnt-item">
          <button>{profileIcon}</button>
        </div>
      </div>
    </>
  );
};

export const PageInlineHeader = ({ handleClick, name }) => {
  return (
    <>
      <div className="pageInlineHeader__cnt">
        <p onClick={handleClick}>{name}</p>
        <button onClick={handleClick}>View All</button>
      </div>
    </>
  );
};

export const HomepageTaskCard = ({
  workspaceName,
  taskTitle,
  progressNumber,
  handleClick,
  cardColor,
}) => {
  return (
    <>
      <div
        onClick={handleClick}
        style={{ backgroundColor: `${cardColor}` }}
        className="homepageTaskCard__cnt"
      >
        <p>{workspaceName}</p>
        <p>{taskTitle}</p>
        <div className="homepageTaskCard__cnt-progress">
          <p>{progressNumber}</p>
          <div className="hptccpbar">
            <div style={{ width: `${progressNumber}` }} />
          </div>
        </div>
      </div>
    </>
  );
};

export const ChatCard = ({
  userStatus,
  userImage,
  userName,
  messageStatus,
  messageTime,
  handleClick,
  message,
}) => {
  return (
    <>
      <div onClick={handleClick} className="chatCard__cnt">
        <div className="chatCard__cnt-left">
          <img src={userImage} alt="" />
          {userStatus && <div />}
        </div>
        <div className="chatCard__cnt-right">
          <div className="chatCard__cnt-righttop">
            <p>{userName}</p>
            <div className="chatCard__cnt-righttimeandstatus">
              <div>{messageStatus}</div>
              <p>{messageTime}</p>
            </div>
          </div>
          <div className="chatCard__cnt-rightbottom">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const TitleCard = ({ name }) => {
  return (
    <>
      <div className="titlecard__cnt">
        <p>{name}</p>
      </div>
    </>
  );
};

export const Modal = ({ children, handleCloseClick, closeIcon, modalName }) => {
  return (
    <>
      <div className="modal__cnt">
        <div className="modal__cntclose" onClick={handleCloseClick} />
        <div className="modal__cnt-body">
          <div className="modal__cnt-top">
            <p>{modalName}</p>
            <button onClick={handleCloseClick}>{closeIcon}</button>
          </div>
          <div className="modal__cnt-bottom">{children}</div>
        </div>
      </div>
    </>
  );
};

export const BigButton = ({ buttonName, handleClick }) => {
  return (
    <>
      <div onClick={handleClick} className="bigButton_cnt">
        <p>{buttonName}</p>
      </div>
    </>
  );
};

export const GroupCard = ({
  workspaceName,
  handleClick,
  workspaceNum,
  images,
}) => {
  return (
    <>
      <div onClick={handleClick} className="groupCard__cnt">
        <div className="groupCard__top">
          <p>{workspaceName}</p>
          <div className="groupCard__membersnum">
            <p>{workspaceNum} members</p>
          </div>
        </div>
        <div className="groupCard__bottom">
          <div className="groupCard__image">
            <img src={images} alt="" />
            <div className="groupCard__restnum"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export const TaskCard = ({
  taskTitle,
  taskSubTitle,
  dateIcon,
  date,
  priorityIcon,
  deleteIcon,
  handleDelete,
  handleClick,
  assigneeImages,
}) => {
  return (
    <>
      <div onClick={handleClick} className="taskcard__cnt">
        <div className="taskcard__top">
          <div className="taskcard__top-typo">
            <p>{taskTitle}</p>
            <p>{taskSubTitle}</p>
          </div>
          <div className="taskcard__top-images">
            <img src={assigneeImages} alt="" />
          </div>
        </div>
        <div className="taskCard__bottom">
          <div className="taskCard__bottom-date">
            {dateIcon}
            <p>{date}</p>
          </div>
          <div className="taskCard__bottom-priority">
            <p>PRIORITY</p>
            {priorityIcon}
          </div>
          <button onClick={handleDelete} className="taskCard__bottom-delete">
            {deleteIcon}
          </button>
        </div>
      </div>
    </>
  );
};

export const LeftChat = ({ message, messageTime, deliveryStatus }) => {
  return (
    <>
      <div className="leftChat__cnt">
        <p>{message}</p>
        <div className="leftChat__cnt-delivery">
          <p>{messageTime}</p>
          {deliveryStatus}
        </div>
      </div>
    </>
  );
};

export const RightChat = ({ message, messageTime, deliveryStatus }) => {
  return (
    <>
      <div className="rightChat__cnt">
        <p>{message}</p>
        <div className="rightChat__cnt-delivery">
          <p>{messageTime}</p>
          {deliveryStatus}
        </div>
      </div>
    </>
  );
};

export const ChatBottomNav = ({
  handleClick,
  attachIcon,
  handleAttachClick,
  chatBottomMessage,
}) => {
  return (
    <>
      <div className="chatBottomNav__cnt">
        <button onClick={handleAttachClick}>{attachIcon}</button>
        <div onClick={handleClick} className="chatBottomNav__message">
          <p>{chatBottomMessage}</p>
        </div>
      </div>
    </>
  );
};
