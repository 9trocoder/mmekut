import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";

import {
  addIconBlue,
  addIconWhite,
  chatNotActive,
  homeIconNotActive,
  profileNotActive,
  searchBig,
  taskNotActive,
} from "../../Utils/tools";
import "./taskpage.css";

function Taskpage() {
  const [activeButton, setActiveButton] = useState("all");
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
      <HeaderBar headerText="Tasks" addIcon={addIconBlue} />

      <div className="taskpage__cnt">
        <div className="taskpage__cnt-search">
          <input type="text" placeholder="Search" />
        </div>

        <div className="taskpage__cnt-taskprojects">
          <button
            className={
              activeButton === "all"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("all")}
          >
            All
          </button>
          <button
            className={
              activeButton === "todo"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("todo")}
          >
            To Do
          </button>
          <button
            className={
              activeButton === "inprogress"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("inprogress")}
          >
            In Progress
          </button>
          <button
            className={
              activeButton === "completed"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("completed")}
          >
            Completed
          </button>
        </div>
      </div>

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
