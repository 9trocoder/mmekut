import React from "react";
import "./components.css";

function ChatMessageModal({
  children,
  handleCloseClick,
  closeIcon,
  userName,
  userImage,
  userStatus,
  searchIcon,
  moreIcon,
  handleMoreIconClick,
  zIndex,
}) {
  return (
    <>
      <div className="chatmessagemodal__cnt">
        <div className="chatmessagemodal__cnt-body">
          <div style={{ zIndex: `${zIndex}` }} className="chatmessagemodal">
            <div className="chatmessagemodal__cnt-top">
              <div className="chatmessagemodal__cnt-topleft">
                <button onClick={handleCloseClick}>{closeIcon}</button>
                <div className="chatmessagemodal__cnt-topleftprofile">
                  <div className="cmmctlp_image-cnt">
                    {userImage && (
                      <>
                        <img src={userImage} alt="" />
                        {userStatus && (
                          <div className="cmmctlp_image-cntstatus" />
                        )}
                      </>
                    )}
                  </div>
                  <p>{userName}</p>
                </div>
              </div>
              <div className="chatmessagemodal__cnt-topright">
                <button>{searchIcon}</button>
                <button onClick={handleMoreIconClick}>{moreIcon}</button>
              </div>
            </div>
            <div className="chatmessagemodal__cnt-bottom">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatMessageModal;
