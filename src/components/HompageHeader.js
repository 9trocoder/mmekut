import "./components.css"

export default function HomepageHeader({
  profileImage,
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
        </div>

        <div className="homepageHeader__cnt-right">
          <button onClick={handleCalendarClick}>{calendarIcon}</button>
          <button onClick={handleNotificationClick}>{notificationIcon}</button>
        </div>
      </div>
    </>
  );
}
