const ChatCardHomepage = ({
  userStatus,
  userImage,
  userName,
  messageStatus,
  messageTime,
  handleClick,
  message,
}) => {
  return (
    <>
      <div onClick={handleClick} className="chatCardHomepage__cnt">
        <div className="chatCardHomepage__cnt-left">
          <img src={userImage} alt="" />
          {userStatus && (
            <div className="chatCardHomepage__cnt-leftuserstatus" />
          )}
        </div>
        <div className="chatCardHomepage__cnt-right">
          <div className="chatCardHomepage__cnt-righttop">
            <p className="chatCardHomepage__cnt-righttopusername">{userName}</p>
            <div className="chatCardHomepage__cnt-righttimeandstatus">
              <div>{messageStatus}</div>
              <p>{messageTime}</p>
            </div>
          </div>
          <div className="chatCardHomepage__cnt-rightbottom">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatCardHomepage;
