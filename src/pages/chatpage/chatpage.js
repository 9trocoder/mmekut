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
  chatTextActive,
  deliveredIcon,
  dividerr,
  groupCardNotificationIcon,
  homeIconNotActive,
  homeTextNotActive,
  profileNotActive,
  profileTextNotActive,
  searchBig,
  taskNotActive,
  workspaceTextNotActive,
} from "../../Utils/tools";
import "./chatpage.css";
import ChatCardHomepage from "../../components/ChatCardHomepage";
import GroupsCard from "../../components/GroupsCard";

let task3 = [p4image, p1image, p5image];
let task4 = [p3image, p1image, p4image, p2image, p5image];

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

  const handleGroupClick = () => {};
  const handleMessagePage = () => {
    navigate("/message");
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
            <button>Direct Messages</button>
          </div>

          <div
            onClick={() => setActiveChatButton("group")}
            className={
              activeChatButton === "group"
                ? "chatpage__cnt-allbutton"
                : "chatpage__cnt-allbuttonnotactive"
            }
          >
            <button>Groups</button>
          </div>
        </div>
        {dividerr}

        <div className="chatpage__cnt-chat">
          {activeChatButton === "all" && (
            <>
              <ChatCardHomepage
                userImage={p1image}
                userStatus={true}
                userName="Alexander"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="Ok, I'll call you when i get there. and bring more snacks"
                handleClick={handleMessagePage}
              />

              <ChatCardHomepage
                userImage={p2image}
                userStatus={true}
                userName="Joseph Ayodele"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="Start Coding na"
                handleClick={handleMessagePage}
              />

              <ChatCardHomepage
                userImage={p3image}
                userStatus={true}
                userName="Mosope"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="On the home screen, that first content, when you click on the 'view task', it will take you here."
                handleClick={handleMessagePage}
              />

              <ChatCardHomepage
                userImage={p4image}
                userStatus={true}
                userName="Oladimeji Emmanuel"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="The containers are added to enable the user click on the group"
                handleClick={handleMessagePage}
              />

              <ChatCardHomepage
                userImage={p5image}
                userStatus={true}
                userName="Mmmekut Mfon"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="See here ....the task screen emmanuel adeyemi"
                handleClick={handleMessagePage}
              />
              <ChatCardHomepage
                userImage={p1image}
                userStatus={true}
                userName="Alexander"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="Ok, I'll call you when i get there. and bring more snacks"
                handleClick={handleMessagePage}
              />

              <ChatCardHomepage
                userImage={p2image}
                userStatus={true}
                userName="Joseph Ayodele"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="Start Coding na"
                handleClick={handleMessagePage}
              />

              <ChatCardHomepage
                userImage={p3image}
                userStatus={true}
                userName="Mosope"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="On the home screen, that first content, when you click on the 'view task', it will take you here."
                handleClick={handleMessagePage}
              />

              <ChatCardHomepage
                userImage={p4image}
                userStatus={true}
                userName="Oladimeji Emmanuel"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="The containers are added to enable the user click on the group"
                handleClick={handleMessagePage}
              />

              <ChatCardHomepage
                userImage={p5image}
                userStatus={true}
                userName="Mmmekut Mfon"
                messageStatus={deliveredIcon}
                messageTime="11:44 AM"
                message="See here ....the task screen emmanuel adeyemi"
                handleClick={handleMessagePage}
              />
            </>
          )}
          {activeChatButton === "group" && (
            <>
              <GroupsCard
                groupName="Mmekut App"
                handleClick={handleGroupClick}
                groupUserImages={task4}
                notificationIcon={groupCardNotificationIcon}
              />
              <GroupsCard
                groupName="9trocoder Tutorial Website with UI/UX design"
                handleClick={handleGroupClick}
                groupUserImages={task3}
                notificationIcon={groupCardNotificationIcon}
              />
            </>
          )}
        </div>
      </div>
      <BottomNav
        addIcon={addIconNotActive}
        taskIcon={taskNotActive}
        taskText={workspaceTextNotActive}
        chatIcon={chatActive}
        chatText={chatTextActive}
        profileIcon={profileNotActive}
        profileText={profileTextNotActive}
        homeIcon={homeIconNotActive}
        homeText={homeTextNotActive}
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
