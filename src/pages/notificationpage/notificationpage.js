import React from "react";
import { useNavigate } from "react-router-dom";
import HomepageHeader from "../../components/HompageHeader";
import p2image from "../../assets/images/p2.png";
import "./notificationpage.css";
import {
  addIconNotActive,
  chatNotActive,
  homeIconNotActive,
  notificationActive,
  otherIcon,
  taskNotActive,
  tasksNotActive,
} from "../../Utils/tools";
import BottomNav from "../../components/BottomNav";

function Notificationpage() {
  let navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/task");
  };
  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {
    navigate("/chat");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      <HomepageHeader profileImage={p2image} calendarIcon={otherIcon} />
      <BottomNav
        showAddButton={false}
        homeIcon={homeIconNotActive}
        // homeText={homeTextNotActive}
        taskIcon={taskNotActive}
        // taskText={workspaceTextActive}
        addIcon={addIconNotActive}
        chatIcon={chatNotActive}
        // chatText={chatTextNotActive}
        profileIcon={tasksNotActive}
        notificationIcon={notificationActive}
        // profileText={profileTextNotActive}
        handleHomeClick={handleHomeClick}
        handleTaskClick={handleTaskClick}
        handleChatClick={handleChatClick}
        handleProfileClick={handleProfileClick}
        handleNotificationClick={() => navigate("/notification")}
      />
    </>
  );
}

export default Notificationpage;
