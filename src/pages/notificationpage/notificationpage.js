import React, { useState } from "react";
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
  const [activeNotificationButton, setActiveNotificationButton] =
    useState("chat");
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

      <div className="workspacepage__cnt">
        <div className="chatpage__cnt-top">
          <div
            onClick={() => setActiveNotificationButton("chat")}
            className={
              activeNotificationButton === "chat"
                ? "chatpage__cnt-allbutton"
                : "chatpage__cnt-allbuttonnotactive"
            }
          >
            <button>Chat</button>
          </div>
          <div
            onClick={() => setActiveNotificationButton("task")}
            className={
              activeNotificationButton === "task"
                ? "chatpage__cnt-allbutton"
                : "chatpage__cnt-allbuttonnotactive"
            }
          >
            <button>Tasks</button>
          </div>
        </div>
        <div className="notification__card diffbottomna">
          <img src={p2image} alt="" />
          <div className="notification__card-right">
            <div className="notification__card-righttop">
              <p className="notification__card-author">9trocoder</p>
              <p className="notification__card-time">9 min ago</p>
            </div>
            <p className="notification__card-bottom">
              Marked the task make a summary table as done and also move the task update to progress.
            </p>
          </div>
        </div>
      </div>
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
