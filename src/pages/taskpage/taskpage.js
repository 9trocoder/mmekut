import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";

import {
  addIconActive,
  addIconBlue,
  addIconWhiteSmall,
  chatNotActive,
  deleteSmallIcon,
  dividerr,
  homeIconNotActive,
  notificationNotActive,
  otherIcon,
  profileNotActive,
  taskNotActive,
  tasksActive,
} from "../../Utils/tools";
import "./taskpage.css";
import TaskListCard from "../../components/TaskListCard";

function Taskpage() {
  const [activeButton, setActiveButton] = useState("all");
  const [showaddTaskButton, setShowaddTaskButton] = useState(true);
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

  let task1 = [p1];
  let task2 = [p2, p3, p4];
  let task3 = [p4, p1, p5];
  let task4 = [p3, p1, p4, p2, p5];

  return (
    <>
      {/* <HeaderBar headerText="Tasks" addIcon={addIconBlue} /> */}

      <div className="workspacepage__cnt">
        <div className="chatpage__cnt-topheader diffbottomna">
          <img src={p2} alt="" />
          <input type="text" placeholder="Search For Task" />
          <button>{otherIcon}</button>
        </div>

        <>
          <div className="chatpage__cnt-chat chatpage__cnt-chatdif">
            <button className="showaddWorkspace">{addIconWhiteSmall}</button>
          </div>
        </>
      </div>

      <BottomNav
        addIcon={addIconActive}
        taskIcon={taskNotActive}
        chatIcon={chatNotActive}
        profileIcon={tasksActive}
        notificationIcon={notificationNotActive}
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
