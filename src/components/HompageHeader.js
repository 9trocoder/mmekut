import "./components.css"

export default function HomepageHeader({
  profileImage,
  headerGreeting,
  userName,
  calendarIcon,
  notificationIcon,
  handleProfileClick,
  handleCalendarClick,
  handleNotificationClick,
}) {
  return (
    <>
      <div className="homepageHeader__cnt">
        <div onClick={handleProfileClick} className="hompageHeader__cnt-left">
          <div className="hompageHeader__cnt-profile">
            <img src={profileImage} alt="" />
          </div>
          <div className="hompageHeader__cnt-writeup">
            <p className="hphcwrgreet">{headerGreeting}</p>
            <p className="hphcwrname">{userName}</p>
          </div>
        </div>

        <div className="homepageHeader__cnt-right">
          <button onClick={handleCalendarClick}>{calendarIcon}</button>
          <button onClick={handleNotificationClick}>{notificationIcon}</button>
        </div>
      </div>
    </>
  );
}
