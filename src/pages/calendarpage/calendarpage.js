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
import {
  clockIcon,
  headerBackIcon,
  otherIcon,
  otherIconTask,
} from "../../Utils/tools";
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
            <button onClick={previousMonth}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <h2>{format(firstDayCurrentMonth, "MMMM yyyy")}</h2>
            <button onClick={nextMonth}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
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
            <h2>
              Taskes Scheduled for{" "}
              <time datetime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>

            <div className="taskesdlist">
              {selectedDayTasks.length > 0 ? (
                selectedDayTasks.map((task) => {
                  let startDateTime = parseISO(task.startDatetime);
                  let endDateTime = parseISO(task.endDatetime);
                  return (
                    <div>
                      <div className="">
                        <div className="">
                          <p>{task.task}</p>
                          <p>{task.projectName}</p>
                        </div>
                        <div className="">{otherIconTask}</div>
                      </div>
                      <div className="">
                        <div className="">
                          {clockIcon}
                          <p>
                            <time datetime={task.startDatetime}>
                              {format(startDateTime, "h:mm a ")}
                            </time>{" "}
                            -{" "}
                            <time datetime={task.endDatetime}>
                              {format(endDateTime, "h:mm a")}
                            </time>
                          </p>
                        </div>
                        <div className="">
                          <img src={task.imageUrl} alt="" />
                        </div>
                      </div>
                    </div>
                  );
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
