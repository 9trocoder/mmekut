import React from "react";
import homepageprofileimage from "../../assets/images/p5.png";
import "./homepage.css";
import { calendarIcon, headerNotificationIcon } from "../../Utils/tools";

import ProgressBar from "../../components/ProgressBar";
import HomepageHeader from "../../components/HompageHeader";
import HeaderWithButton from "../../components/HeaderWithButton";
import HomepageTaskCard from "../../components/HomepageTaskCard";

function Homepage() {
  const handleProfileClick = () => {};

  const handleCalendarClick = () => {};

  const handleNotificationClick = () => {};

  const handleMyTaskClick = () => {};

  const handleTaskClick = () => {};

  return (
    <>
      <HomepageHeader
        profileImage={homepageprofileimage}
        headerGreeting="Good Evening!"
        userName="Jade Peter"
        calendarIcon={calendarIcon}
        notificationIcon={headerNotificationIcon}
        handleProfileClick={handleProfileClick}
        handleCalendarClick={handleCalendarClick}
        handleNotificationClick={handleNotificationClick}
      />

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
        headerName="My Tasks"
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
    </>
  );
}

export default Homepage;
