import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatMessageModal from "../../components/ChatMessageHeader";
import LeftChat from "../../components/LeftChat";
import {
  addIconWhiteSmall,
  dividerr,
  headerBackIcon,
  otherIcon,
  readIcon,
  searchBig,
} from "../../Utils/tools";
import p4image from "../../assets/images/p4.png";
import "./messagepage.css";
import RightChat from "../../components/RightChat";

function Messagepage() {
  const [messageMenu, setMessageMenu] = useState(false);
  let navigate = useNavigate();
  const handleUserChatPageClose = () => {
    navigate("/chat");
  };
  return (
    <>
      <ChatMessageModal
        zIndex={10002}
        handleCloseClick={handleUserChatPageClose}
        closeIcon={headerBackIcon}
        userName="Alexander"
        userImage={p4image}
        userStatus={true}
        searchIcon={searchBig}
        moreIcon={otherIcon}
        handleMoreIconClick={() => {
          setMessageMenu(true);
        }}
      >
        <LeftChat
          message="Hello, we have a meeting by 10"
          messageTime="1:10 PM"
          deliveryStatus={readIcon}
        />
        <RightChat
          message="Alright i will fix the meeting to the time is okay for everyone. So the meeting would be on Google Meeting or Zoom meeting. Please kindly attend all meeting."
          messageTime="11:00 AM"
          deliveryStatus={readIcon}
        />
        <LeftChat
          message="Website for donkeyfarm!"
          messageTime="2:11 PM"
          deliveryStatus={readIcon}
        />
        <RightChat
          message="Oh, my God, I completely forgot, sorry, of course, I'll be there!"
          messageTime="11:15 AM"
          deliveryStatus={readIcon}
        />
        <div className="chatMessageBottom__cnt">
          <div className="cmbc_look">
            <div className="chatMessageBottom__cnt-left">
              {addIconWhiteSmall}
            </div>
            <input type="text" placeholder="Write a message..." />
          </div>
          <button>Send</button>
        </div>
        {messageMenu && (
          <div className="showmessagemenu">
            <div
              onClick={() => {
                setMessageMenu(false);
              }}
              className="showmessagemenuoverlay"
            />
            <div className="showmessagemenubody">
              <div
                onClick={() => {
                  setMessageMenu(false);
                }}
                className="showmessagemenu-item"
              >
                <p>View contact</p>
              </div>
              {dividerr}
              <div
                onClick={() => {
                  setMessageMenu(false);
                }}
                className="showmessagemenu-item"
              >
                <p>Search</p>
              </div>
              {dividerr}
              <div
                onClick={() => {
                  setMessageMenu(false);
                }}
                className="showmessagemenu-item"
              >
                <p>Mute notifications</p>
              </div>
              {dividerr}
              <div
                onClick={() => {
                  setMessageMenu(false);
                }}
                className="showmessagemenu-item"
              >
                <p>Block</p>
              </div>
              {dividerr}
              <div
                onClick={() => {
                  setMessageMenu(false);
                }}
                className="showmessagemenu-item"
              >
                <p>Clear chat</p>
              </div>
              {dividerr}
              <div
                onClick={() => {
                  setMessageMenu(false);
                }}
                className="showmessagemenu-item"
              >
                <p>Report</p>
              </div>
            </div>
          </div>
        )}
      </ChatMessageModal>
    </>
  );
}

export default Messagepage;
