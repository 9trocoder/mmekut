const HeaderBar = ({
  backIcon,
  headerText,
  addIcon,
  calendarIcon,
  notificationIcon,
  handleCalendarClick,
  handleNotificationClick,
  handleBackClick,
  handleAddClick,
}) => {
  return (
    <>
      <div className="headerBar__cnt">
        <div className="headerBar__cnt-left">
          {backIcon && <button onClick={handleBackClick}>{backIcon}</button>}
          <p>{headerText}</p>
        </div>
        <div className="headerBar__cnt-right">
          {addIcon && <button onClick={handleAddClick}>{addIcon}</button>}
          {calendarIcon && (
            <button onClick={handleCalendarClick}>{calendarIcon}</button>
          )}
          {notificationIcon && (
            <button onClick={handleNotificationClick}>
              {notificationIcon}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
