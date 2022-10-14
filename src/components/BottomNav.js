import { addIconWhiteSmall } from "../Utils/tools";

const BottomNav = ({
  homeIcon,
  homeText,
  showAddButton,
  workspaceText,
  taskIcon,
  taskText,
  addIcon,
  notificationIcon,
  notificationText,
  chatIcon,
  chatText,
  profileIcon,
  profileText,
  handleHomeClick,
  handleTaskClick,
  handleAddClick,
  handleChatClick,
  handleProfileClick,
  handleNotificationClick,
}) => {
  return (
    <>
      {showAddButton && (
        <div
          onClick={handleAddClick}
          className="bottomnav__cnt-item bottomnav__cnt-itemadd"
        >
          <button>{addIconWhiteSmall}</button>
        </div>
      )}

      <div className="bottomnav__cnt">
        <div onClick={handleHomeClick} className="bottomnav__cnt-item">
          <button>
            <div className="bottomnav__icon">{homeIcon}</div>
            <div className="bottomnav__text">{homeText}</div>
          </button>
        </div>
        <div onClick={handleTaskClick} className="bottomnav__cnt-item">
          <button>
            <div className="bottomnav__icon">{taskIcon}</div>
            <div className="bottomnav__text">{taskText}</div>
          </button>
        </div>
        <div onClick={handleProfileClick} className="bottomnav__cnt-item">
          <button>
            <div className="bottomnav__icon">{profileIcon}</div>
            <div className="bottomnav__text">{profileText}</div>
          </button>
        </div>
        <div onClick={handleNotificationClick} className="bottomnav__cnt-item">
          <button>
            <div className="bottomnav__icon">{notificationIcon}</div>
            <div className="bottomnav__text">{notificationText}</div>
          </button>
        </div>
        <div onClick={handleChatClick} className="bottomnav__cnt-item">
          <button>
            <div className="bottomnav__icon">{chatIcon}</div>
            <div className="bottomnav__text">{chatText}</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
