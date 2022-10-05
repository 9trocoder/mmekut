import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import {
  addIconBlue,
  addIconWhite,
  calendarIcon,
  chatNotActive,
  headerNotificationIcon,
  homeIconNotActive,
  profileNotActive,
  taskNotActive,
} from "../../Utils/tools";
import "./taskpage.css";

function Taskpage() {
  let navigate = useNavigate();

  const handleProfileClick = () => {};
  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {};
  const handleAddClick = () => {
    navigate("/task");
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderBar
        headerText="Tasks"
        addIcon={addIconBlue}
        calendarIcon={calendarIcon}
        notificationIcon={headerNotificationIcon}
      />

      <BottomNav
        addIcon={addIconWhite}
        taskIcon={taskNotActive}
        chatIcon={chatNotActive}
        profileIcon={profileNotActive}
        homeIcon={homeIconNotActive}
        handleHomeClick={handleHomeClick}
        handleTaskClick={handleTaskClick}
        handleAddClick={handleAddClick}
        handleChatClick={handleChatClick}
        handleProfileClick={handleProfileClick}
      />
    </>
  );
}

export default Taskpage;
