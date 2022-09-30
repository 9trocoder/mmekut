import React from "react";
import homepageprofileimage from "../../assets/images/p5.png";
import "./homepage.css";
import { calendarIcon, headerNotificationIcon } from "../../Utils/tools";
import HomepageHeader from "../../components/components/HompageHeader";

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
    </>
  );
}



export default Homepage;
