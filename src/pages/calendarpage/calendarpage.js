import React, { useState } from "react";
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
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import ChatMessageModal from "../../components/ChatMessageHeader";
import { clockIcon, headerBackIcon, otherIcon, otherIconTask } from "../../Utils/tools";
import p1image from "../../assets/images/p1.png";
import p2image from "../../assets/images/p2.png";
import p3image from "../../assets/images/p3.png";
import p4image from "../../assets/images/p4.png";
import p5image from "../../assets/images/p5.png";
import "./calendarpage.css";

function Calendarpage() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });
  let navigate = useNavigate();
  const handleCloseClick = () => {
    navigate(-1);
  };

  const tasks = [
    {
      id: 1,
      name: "9trocoder",
      projectName: "Ushy Dashboard",
      task: "Work on the user settings page",
      imageUrl: p1image,
      startDatetime: "2022-11-14T13:00",
      endDatetime: "2022-11-14T14:30",
    },
    {
      id: 2,
      name: "Mmekut",
      projectName: "Mmmekut App",
      task: "Create Calendar page for mmekut",
      imageUrl: p2image,
      startDatetime: "2022-11-15T09:00",
      endDatetime: "2022-11-15T11:30",
    },
    {
      id: 3,
      name: "Mosope",
      projectName: "Ushy App",
      task: "Design alert dialog for backout",
      imageUrl: p3image,
      startDatetime: "2022-11-16T17:00",
      endDatetime: "2022-11-16T18:30",
    },
    {
      id: 4,
      name: "9trocoder",
      projectName: "Instagram Feeds",
      task: "Upload mmekut news design feed to instagram!!",
      imageUrl: p4image,
      startDatetime: "2022-11-17T13:00",
      endDatetime: "2022-11-17T14:30",
    },
    {
      id: 5,
      name: "Mmekut",
      projectName: "SEO Optimization",
      task: "Please kindly make the app visible on google search.",
      imageUrl: p5image,
      startDatetime: "2022-11-18T14:00",
      endDatetime: "2022-11-18T14:30",
    },
  ];

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectedDayTasks = tasks.filter((task) =>
    isSameDay(parseISO(task.startDatetime), selectedDay)
  );
  return (
    <>
      <ChatMessageModal
        zIndex={10008}
        closeIcon={headerBackIcon}
        handleCloseClick={handleCloseClick}
        userName="Calendar"
        moreIcon={otherIcon}
      >
        <div className="calendarpage__cnt">
          <div className="calendarpage__cnt-top">
            <button onClick={previousMonth}>previous</button>
            <h2>{format(firstDayCurrentMonth, "MMMM yyyy")}</h2>
            <button onClick={nextMonth}>Next</button>
          </div>
          <div className="calendarpage__cnt-daylist">
            <p className="calendardaylist">SUN</p>
            <p className="calendardaylist">MON</p>
            <p className="calendardaylist">TUE</p>
            <p className="calendardaylist">WED</p>
            <p className="calendardaylist">THUR</p>
            <p className="calendardaylist">FRI</p>
            <p className="calendardaylist">SAT</p>
          </div>
          <div className="calendarpage__cnt-daydate">
            {days.map((day, dayIndex) => (
              <div key={day.toString()}>
                <button onClick={() => setSelectedDay(day)}>
                  <time datetime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </button>
                <div className="daydateWork">
                  {tasks.some((task) =>
                    isSameDay(parseISO(task.startDatetime), day)
                  ) && <div></div>}
                </div>
              </div>
            ))}
          </div>
          <section className="calendarpage__cnt-daydatetitle">
            <h2>Taskes Scheduled for {' '} <time datetime={format(selectedDay, 'yyyy-MM-dd')}>{format(selectedDay, 'MMM dd, yyy')}</time></h2>

            <div className="taskesdlist">
              {selectedDayTasks.length > 0 ? (
                selectedDayTasks.map((task) => {
                  let startDateTime = parseISO(task.startDatetime)
                  let endDateTime = parseISO(task.endDatetime)
                  return (
                    <div>
                      <div className="">
                        <div className="">
                          <p>{task.task}</p>
                          <p>{task.projectName}</p>
                        </div>
                        <div className="">
                          {otherIconTask}
                        </div>
                      </div>
                      <div className="">
                        <div className="">
                          {clockIcon}
                          <p><time datetime={task.startDatetime}>{format(startDateTime, 'h:mm a ')}</time>{' '}-{' '} <time datetime={task.endDatetime}>{format(endDateTime, 'h:mm a')}</time></p>
                        </div>
                        <div className="">
                          <img src={task.imageUrl} alt="" />
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <p>No Task for today.</p>
              )}
            </div>
          </section>
        </div>
      </ChatMessageModal>
    </>
  );
}

export default Calendarpage;
