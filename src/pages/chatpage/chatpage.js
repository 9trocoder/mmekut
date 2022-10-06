import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import {
  addIconNotActive,
  chatActive,
  homeIconNotActive,
  profileNotActive,
  taskNotActive,
} from "../../Utils/tools";
import "./chatpage.css";

function Chatpage() {
  let navigate = useNavigate();
  const handleProfileClick = () => {};
  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {
    navigate("/chat");
  };
  const handleAddClick = () => {
    navigate("/task");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      <HeaderBar headerText="Chat" />
      <BottomNav
        addIcon={addIconNotActive}
        taskIcon={taskNotActive}
        chatIcon={chatActive}
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

export default Chatpage;
