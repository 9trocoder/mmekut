import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import TitleCard from "../../components/TitleCard";
import {
  addIconBlue,
  addIconWhite,
  chatNotActive,
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
      />

      <div className="workspacepage__cnt">
        <TitleCard name="My Work Spaces" />
      </div>
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
