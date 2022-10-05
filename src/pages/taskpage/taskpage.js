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
          <div
            className={
              activeButton === "all"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("all")}
          >
            All
          </div>
          <div
            className={
              activeButton === "todo"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("todo")}
          >
            To Do
          </div>
          <div
            className={
              activeButton === "inprogress"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("inprogress")}
          >
            In Progress
          </div>
          <div
            className={
              activeButton === "completed"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("completed")}
          >
            Completed
          </div>
        </div>

        <p>
          is defined but never used no-unused-vars Line 9:8: 'WorkspaceTasklist'
          is defined but never used no-unused-vars Line 19:3: 'arrowdownbutton'
          is defined but never used no-unused-vars Line 33:10: 'activeIndex' is
          assigned a value but never used no-unused-vars Line 33:23:
          'setActiveIndex' is assigned a value but never used no-unused-vars
        </p>
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
