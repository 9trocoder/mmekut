import React from "react";
import { useNavigate } from "react-router-dom";
import ChatMessageModal from "../../components/ChatMessageHeader";
import LeftChat from "../../components/LeftChat";
import {
  headerBackIcon,
  otherIcon,
  readIcon,
  searchBig,
} from "../../Utils/tools";
import p4image from "../../assets/images/p4.png";
import "./messagepage.css";
import RightChat from "../../components/RightChat";

function Messagepage() {
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
          messageTime="11:15 Am"
          deliveryStatus={readIcon}
        />
      </ChatMessageModal>
    </>
  );
}

export default Messagepage;
