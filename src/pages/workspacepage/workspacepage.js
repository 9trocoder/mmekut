import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccordionLayout from "../../components/AccordionLayout";
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
  const [activeIndex, setActiveIndex] = useState(1);
  const handleProfileClick = () => {};
  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {};
  const handleAddClick = () => {};
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderBar headerText="Workspaces" addIcon={addIconBlue} />

      <div className="workspacepage__cnt">
        <TitleCard name="My Work Spaces" />
        <AccordionLayout
          title="Mmekut App"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          Mmekut FrontEnd
        </AccordionLayout>
        <AccordionLayout
          title="Ushy"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          9trocoder Launching page
        </AccordionLayout>
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
