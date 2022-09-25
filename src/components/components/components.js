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
