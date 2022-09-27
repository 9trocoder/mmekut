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

export const HomepageHeader = ({
  profileImage,
  headerGreeting,
  userName,
  calendarIcon,
  notificationIcon,
  handleProfileClick,
  handleCalendarClick,
  handleNotificationClick,
}) => {
  return (
    <>
      <div className="homepageHeader__cnt">
        <div onClick={handleProfileClick} className="hompageHeader__cnt-left">
          <div className="hompageHeader__cnt-profile">
            <img src={profileImage} alt="" />
          </div>
          <div className="hompageHeader__cnt-writeup">
            <p>{headerGreeting}</p>
            <p>{userName}</p>
          </div>
        </div>

        <div className="homepageHeader__cnt-right">
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
