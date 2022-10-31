import React from "react";
import { useNavigate } from "react-router-dom";
import ChatMessageModal from "../../components/ChatMessageHeader";
import {
  addIconWhiteSmall,
  chatActive,
  headerBackIcon,
} from "../../Utils/tools";

function Projectpage() {
  let navigate = useNavigate();
  return (
    <>
      <ChatMessageModal
        zIndex={10008}
        handleCloseClick={() => navigate(-1)}
        closeIcon={headerBackIcon}
        userName="Projects"
        // searchIcon={chatActive}
      >
        <button onClick={() => {}} className="showaddWorkspace">
          {addIconWhiteSmall}
        </button>
      </ChatMessageModal>
    </>
  );
}

export default Projectpage;
