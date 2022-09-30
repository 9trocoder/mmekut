import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import {
  addIconBlue,
  addIconWhite,
  calendarIcon,
  chatNotActive,
  headerBackIcon,
  headerNotificationIcon,
  homeIconNotActive,
  profileNotActive,
  taskActive,
} from "../../Utils/tools";
import "./workspacepage.css";

function Workspacepage() {
  let navigate = useNavigate();
  const handleProfileClick = () => {};
  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {};
  const handleAddClick = () => {};
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <>
      <HeaderBar
        headerText="Workspaces"
        addIcon={addIconBlue}
        backIcon={headerBackIcon}
        calendarIcon={calendarIcon}
        notificationIcon={headerNotificationIcon}
        handleBackClick={handleBackClick}
      />
      <BottomNav
        homeIcon={homeIconNotActive}
        taskIcon={taskActive}
        addIcon={addIconWhite}
        chatIcon={chatNotActive}
        profileIcon={profileNotActive}
        handleHomeClick={handleHomeClick}
        handleTaskClick={handleTaskClick}
        handleAddClick={handleAddClick}
        handleChatClick={handleChatClick}
        handleProfileClick={handleProfileClick}
      />
    </>
  );
}

export default Workspacepage;
