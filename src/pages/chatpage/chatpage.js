import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import p1image from "../../assets/images/p1.png";
import p2image from "../../assets/images/p2.png";
import p3image from "../../assets/images/p3.png";
import p4image from "../../assets/images/p4.png";
import p5image from "../../assets/images/p5.png";
import {
  addIconNotActive,
  chatActive,
  deliveredIcon,
  dividerr,
  homeIconNotActive,
  profileNotActive,
  searchBig,
  taskNotActive,
} from "../../Utils/tools";
import "./chatpage.css";
import ChatCardHomepage from "../../components/ChatCardHomepage";

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
          <ChatCardHomepage
            userImage={p1image}
            userStatus={true}
            userName="Alexander"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="Ok, I'll call you when i get there. and bring more snacks"
          />

          <ChatCardHomepage
            userImage={p2image}
            userStatus={true}
            userName="Joseph Ayodele"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="Start Coding na"
          />

          <ChatCardHomepage
            userImage={p3image}
            userStatus={true}
            userName="Mosope"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="On the home screen, that first content, when you click on the 'view task', it will take you here."
          />

          <ChatCardHomepage
            userImage={p4image}
            userStatus={true}
            userName="Oladimeji Emmanuel"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="The containers are added to enable the user click on the group"
          />

          <ChatCardHomepage
            userImage={p5image}
            userStatus={true}
            userName="Mmmekut Mfon"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="See here ....the task screen emmanuel adeyemi"
          />
          <ChatCardHomepage
            userImage={p1image}
            userStatus={true}
            userName="Alexander"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="Ok, I'll call you when i get there. and bring more snacks"
          />

          <ChatCardHomepage
            userImage={p2image}
            userStatus={true}
            userName="Joseph Ayodele"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="Start Coding na"
          />

          <ChatCardHomepage
            userImage={p3image}
            userStatus={true}
            userName="Mosope"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="On the home screen, that first content, when you click on the 'view task', it will take you here."
          />

          <ChatCardHomepage
            userImage={p4image}
            userStatus={true}
            userName="Oladimeji Emmanuel"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="The containers are added to enable the user click on the group"
          />

          <ChatCardHomepage
            userImage={p5image}
            userStatus={true}
            userName="Mmmekut Mfon"
            messageStatus={deliveredIcon}
            messageTime="11:44 AM"
            message="See here ....the task screen emmanuel adeyemi"
          />
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
