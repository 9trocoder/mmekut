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
import p1image from "../../assets/images/p1.png";
import p2image from "../../assets/images/p2.png";
import p3image from "../../assets/images/p3.png";
import p4image from "../../assets/images/p4.png";
import p5image from "../../assets/images/p5.png";
import "./calendarpage.css";

function Calendarpage() {
  let navigate = useNavigate();
  const handleCloseClick = () => {
    navigate(-1);
  };

  const tasks = [
    {
      id: 1,
      name: "9trocoder",
      imageUrl: p1image,
      startDatetime: "2022-11-14T13:00",
      endDatetime: "2022-11-14T14:30",
    },
    {
      id: 2,
      name: "Mmekut",
      imageUrl: p2image,
      startDatetime: "2022-11-15T09:00",
      endDatetime: "2022-11-15T11:30",
    },
    {
      id: 3,
      name: "Mosope",
      imageUrl: p3image,
      startDatetime: "2022-11-16T17:00",
      endDatetime: "2022-11-16T18:30",
    },
    {
      id: 4,
      name: "9trocoder",
      imageUrl: p4image,
      startDatetime: "2022-11-17T13:00",
      endDatetime: "2022-11-17T14:30",
    },
    {
      id: 5,
      name: "Mmekut",
      imageUrl: p5image,
      startDatetime: "2022-11-18T14:00",
      endDatetime: "2022-11-18T14:30",
    },
  ];
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
