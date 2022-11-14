import React from "react";
import { useNavigate } from "react-router-dom";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
  startOfToday,
} from "date-fns";
import ChatMessageModal from "../../components/ChatMessageHeader";
import { headerBackIcon, otherIcon } from "../../Utils/tools";
import "./calendarpage.css";

function Calendarpage() {
  let navigate = useNavigate();
  const handleCloseClick = () => {
    navigate(-1);
  };
  return (
    <>
      <ChatMessageModal
        zIndex={10008}
        closeIcon={headerBackIcon}
        handleCloseClick={handleCloseClick}
        userName="Calendar"
        moreIcon={otherIcon}
      ></ChatMessageModal>
    </>
  );
}

export default Calendarpage;
