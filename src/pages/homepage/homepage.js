import React from "react";
import homepageprofileimage from "../../assets/images/p5.png";
import p1image from "../../assets/images/p1.png";
import p2image from "../../assets/images/p2.png";
import p3image from "../../assets/images/p3.png";
import p4image from "../../assets/images/p4.png";
import p5image from "../../assets/images/p5.png";
import "./homepage.css";
import {
  addIconNotActive,
  calendarIcon,
  chatNotActive,
  chatTextNotActive,
  closeIcon,
  deliveredIcon,
  headerNotificationIcon,
  homeIconActive,
  homeTextActive,
  notificationNotActive,
  profileNotActive,
  profileTextNotActive,
  taskNotActive,
  tasksNotActive,
  workspaceTextNotActive,
} from "../../Utils/tools";

import ProgressBar from "../../components/ProgressBar";
import HomepageHeader from "../../components/HompageHeader";
import HeaderWithButton from "../../components/HeaderWithButton";
import HomepageTaskCard from "../../components/HomepageTaskCard";
import ChatCardHomepage from "../../components/ChatCardHomepage";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Homepage() {
  let navigate = useNavigate();
  const [showaddButton, setShowAddButton] = useState(false);
  const handleProfileClick = () => {
    navigate("/task");
  };

  const handleCalendarClick = () => {
    navigate("/calendar");
  };

  const handleNotificationClick = () => {};

  const handleMyTaskClick = () => {
    navigate("/projects");
  };
  const handleMyChatClick = () => {
    navigate("/chat");
  };

  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {
    navigate("/chat");
  };
  const handleAddClick = () => {
    setShowAddButton(true);
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleMessagePage = () => {
    navigate("/message");
  };
  return (
    <>
      <HomepageHeader
        profileImage={p2image}
        calendarIcon={calendarIcon}
        // notificationIcon={headerNotificationIcon}
        handleProfileClick={handleProfileClick}
        handleCalendarClick={handleCalendarClick}
        handleNotificationClick={handleNotificationClick}
      />
      <div className="homepagewies">
        <div className="hompagetaskoverview__cnt">
          <div className="hompagetaskoverview__cnt-left">
            <p>
              Your today's task <br /> almost done!
            </p>
            <button>View Tasks</button>
          </div>
          <div className="hompagetaskoverview__cnt-right">
            <ProgressBar
              progress={60}
              circleHeight="70"
              circleWidth="70"
              borderWidth="5px"
              borderColor="#ffffff"
              strokeColor="#ffffff"
            />
          </div>
        </div>

        <HeaderWithButton
          headerName="Projects"
          headerButtonName="View All"
          handleClick={handleMyTaskClick}
        />

        <div className="hompagetask__cnt">
          <HomepageTaskCard
            workspaceName="Mmekut App"
            taskTitle="Create a taxi Landing Page"
            progressNumber={60}
            cardColor="#F1EEFD"
            progressColor="#0184fb"
            handleClick={handleTaskClick}
          />
          <HomepageTaskCard
            workspaceName="Ushy App"
            taskTitle="Add new Schemas to the backend"
            progressNumber={40}
            cardColor="#FEF2E5"
            progressColor="#FFB057"
            handleClick={handleTaskClick}
          />
        </div>
        <HeaderWithButton
          headerName="Chat"
          headerButtonName="View All"
          handleClick={handleMyChatClick}
        />

        <div className="homepagethechat__cnt">
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
        </div>
      </div>

      {showaddButton && (
        <div className="homepageaddmodal">
          <div
            className="homepageaddmodal__overlay"
            onClick={() => setShowAddButton(false)}
          />
          <div className="homepageaddmodal__content">
            <div className="homepageaddmodal__top">
              <p className="homepageaddmodal__title">9trocoder Space</p>
              <div
                className="homepageaddmodal__close"
                onClick={() => setShowAddButton(false)}
              >
                {closeIcon}
              </div>
            </div>
            <div className="homepageaddmodal__bottom">
              <button
                onClick={() => navigate("/workspace")}
                className="homepageaddmodal__newwork"
              >
                Create new workspace
              </button>
              <button
                onClick={() => navigate("/projects")}
                className="homepageaddmodal__newproject"
              >
                Add new project
              </button>
              <button
                onClick={() => navigate("/task")}
                className="homepageaddmodal__newtask"
              >
                Add new task
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav
        showAddButton={true}
        homeIcon={homeIconActive}
        // homeText={homeTextActive}
        taskIcon={taskNotActive}
        // taskText={workspaceTextNotActive}
        addIcon={addIconNotActive}
        chatIcon={chatNotActive}
        // chatText={chatTextNotActive}
        profileIcon={tasksNotActive}
        notificationIcon={notificationNotActive}
        // profileText={profileTextNotActive}
        handleHomeClick={handleHomeClick}
        handleTaskClick={handleTaskClick}
        handleAddClick={handleAddClick}
        handleChatClick={handleChatClick}
        handleProfileClick={handleProfileClick}
        handleNotificationClick={() => navigate("/notification")}
      />
    </>
  );
}

export default Homepage;
