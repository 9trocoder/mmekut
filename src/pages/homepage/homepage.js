import React from "react";
import homepageprofileimage from "../../assets/images/p5.png";
import "./homepage.css";
import { calendarIcon, headerNotificationIcon } from "../../Utils/tools";

import ProgressBar from "../../components/ProgressBar";
import HomepageHeader from "../../components/HompageHeader";

function Homepage() {
  const handleProfileClick = () => {};

  const handleCalendarClick = () => {};

  const handleNotificationClick = () => {};

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
    </>
  );
}

export default Homepage;
