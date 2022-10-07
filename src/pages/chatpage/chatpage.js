import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import {
  addIconNotActive,
  chatActive,
  dividerr,
  homeIconNotActive,
  profileNotActive,
  searchBig,
  taskNotActive,
} from "../../Utils/tools";
import "./chatpage.css";

function Chatpage() {
  const [activeChatButton, setActiveChatButton] = useState("all");
  let navigate = useNavigate();
  const handleProfileClick = () => {};
  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {
    navigate("/chat");
  };
  const handleAddClick = () => {};
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      <HeaderBar headerText="Chat" addIcon={searchBig} />
      <div className="chatpage__cnt">
        <div className="chatpage__cnt-top">
          <div
            onClick={() => setActiveChatButton("all")}
            className={
              activeChatButton === "all"
                ? "chatpage__cnt-allbutton"
                : "chatpage__cnt-allbuttonnotactive"
            }
          >
            <button>All Chats</button>
          </div>

          <div
            onClick={() => setActiveChatButton("org")}
            className={
              activeChatButton === "org"
                ? "chatpage__cnt-allbutton"
                : "chatpage__cnt-allbuttonnotactive"
            }
          >
            <button>Organisation</button>
          </div>
        </div>
        {dividerr}

        <div className="chatpage__cnt-chat">
            
        </div>
      </div>
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
