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

function Messagepage() {
  let navigate = useNavigate();
  const handleUserChatPageClose = () => {
    navigate(-1);
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
      </ChatMessageModal>
    </>
  );
}

export default Messagepage;
