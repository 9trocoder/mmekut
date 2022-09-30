const BottomNav = ({
  homeIcon,
  taskIcon,
  addIcon,
  chatIcon,
  profileIcon,
  handleHomeClick,
  handleTaskClick,
  handleAddClick,
  handleChatClick,
  handleProfileClick,
}) => {
  return (
    <>
      <div className="bottomnav__cnt">
        <div onClick={handleHomeClick} className="bottomnav__cnt-item">
          <button>{homeIcon}</button>
        </div>
        <div onClick={handleTaskClick} className="bottomnav__cnt-item">
          <button>{taskIcon}</button>
        </div>
        <div onClick={handleAddClick} className="bottomnav__cnt-item bottomnav__cnt-itemadd">
          <button>{addIcon}</button>
        </div>
        <div onClick={handleChatClick} className="bottomnav__cnt-item">
          <button>{chatIcon}</button>
        </div>
        <div onClick={handleProfileClick} className="bottomnav__cnt-item">
          <button>{profileIcon}</button>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
