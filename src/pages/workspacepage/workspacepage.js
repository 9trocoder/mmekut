import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccordionLayout from "../../components/AccordionLayout";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import TitleCard from "../../components/TitleCard";
import WorkspaceTasklist from "../../components/WorkspaceTasklist";
import {
  addIconBlue,
  addIconWhite,
  chatNotActive,
  dividerr,
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
          <WorkspaceTasklist
            projectName="Githarita FrontEnd"
            numtask="15/20"
            progressNumber={50}
          />
          {dividerr}
          <WorkspaceTasklist
            projectName="9trocoder Launching page"
            numtask="4/16"
            progressNumber={20}
          />
        </AccordionLayout>
        <AccordionLayout
          title="Ushy"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
           <WorkspaceTasklist
            projectName="LC Wakiki"
            numtask="2/4"
            progressNumber={50}
          />
          {dividerr}
          <WorkspaceTasklist
            projectName="Gloria Jeans Clothing"
            numtask="20/20"
            progressNumber={100}
          />
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
