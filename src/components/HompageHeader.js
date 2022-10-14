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

            <img className="hompageHeader__cnt-profile" src={profileImage} alt="" />
          
        </div>

        <div className="homepageHeader__cnt-right">
          <button onClick={handleCalendarClick}>{calendarIcon}</button>
          {/* <button onClick={handleNotificationClick}>{notificationIcon}</button> */}
        </div>
      </div>
    </>
  );
}
