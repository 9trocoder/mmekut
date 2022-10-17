import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";

import {
  addIconActive,
  addIconBlue,
  chatNotActive,
  deleteSmallIcon,
  dividerr,
  homeIconNotActive,
  notificationNotActive,
  profileNotActive,
  taskNotActive,
  tasksActive,
} from "../../Utils/tools";
import "./taskpage.css";
import TaskListCard from "../../components/TaskListCard";

function Taskpage() {
  const [activeButton, setActiveButton] = useState("all");
  let navigate = useNavigate();

  const handleProfileClick = () => {};
  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {
    navigate("/chat");
  };
  const handleAddClick = () => {
    navigate("/task");
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  let task1 = [p1];
  let task2 = [p2, p3, p4];
  let task3 = [p4, p1, p5];
  let task4 = [p3, p1, p4, p2, p5];

  return (
    <>
      <HeaderBar headerText="Tasks" addIcon={addIconBlue} />

      <div className="taskpage__cnt">
        <div className="taskpage__cnt-search">
          <input type="text" placeholder="Search" />
        </div>

        <div className="taskpage__cnt-taskprojects">
          <div
            className={
              activeButton === "all"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("all")}
          >
            All
          </div>
          <div
            className={
              activeButton === "todo"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("todo")}
          >
            To Do
          </div>
          <div
            className={
              activeButton === "inprogress"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("inprogress")}
          >
            In Progress
          </div>
          <div
            className={
              activeButton === "completed"
                ? "taskpage__cnt-taskprojectsactive"
                : "taskpage__cnt-taskprojectsbtn"
            }
            onClick={() => setActiveButton("completed")}
          >
            Completed
          </div>
        </div>
        {dividerr}
        <div className="taskpage__cnt-tasklist">
          <TaskListCard
            projectName="Food Delivery App"
            taskTitle="Design two app screens"
            taskDescription="On the home screen, that first content when you click on the 'view task', it will take you her. see here ....the task screen"
            deleteIcon={deleteSmallIcon}
            taskImage={task1}
            priority="HIGH"
            taskDate="45 mins ago"
          />
          <TaskListCard
            projectName="Food Delivery App"
            taskTitle="Design two app screens"
            taskDescription="When you click on this, it will take you to the calender by the right"
            deleteIcon={deleteSmallIcon}
            taskImage={task2}
            priority="HIGH"
            taskDate="1hr ago"
          />
          <TaskListCard
            projectName="Food Delivery App"
            taskTitle="Design two app screens"
            taskDescription="See here ...the task screen"
            deleteIcon={deleteSmallIcon}
            taskImage={task3}
            priority="HIGH"
            taskDate="15 days ago"
          />
          <TaskListCard
            projectName="Food Delivery App"
            taskTitle="Design two app screens"
            taskDescription="Containers are add to enable the user click on the group"
            deleteIcon={deleteSmallIcon}
            taskImage={task4}
            priority="HIGH"
            taskDate="12 days ago"
          />
          <TaskListCard
            projectName="Food Delivery App"
            taskTitle="Design two app screens"
            taskDescription="On the home screen, that first content when you click on the 'view task', it will take you her. see here ....the task screen"
            deleteIcon={deleteSmallIcon}
            taskImage={task1}
            priority="HIGH"
            taskDate="45 mins ago"
          />
          <TaskListCard
            projectName="Food Delivery App"
            taskTitle="Design two app screens"
            taskDescription="When you click on this, it will take you to the calender by the right"
            deleteIcon={deleteSmallIcon}
            taskImage={task2}
            priority="HIGH"
            taskDate="1hr ago"
          />
          <TaskListCard
            projectName="Food Delivery App"
            taskTitle="Design two app screens"
            taskDescription="See here ...the task screen"
            deleteIcon={deleteSmallIcon}
            taskImage={task3}
            priority="HIGH"
            taskDate="15 days ago"
          />
          <TaskListCard
            projectName="Food Delivery App"
            taskTitle="Design two app screens"
            taskDescription="Containers are add to enable the user click on the group"
            deleteIcon={deleteSmallIcon}
            taskImage={task4}
            priority="HIGH"
            taskDate="12 days ago"
          />
        </div>
      </div>

      <BottomNav
        addIcon={addIconActive}
        taskIcon={taskNotActive}
        chatIcon={chatNotActive}
        profileIcon={tasksActive}
        notificationIcon={notificationNotActive}
        homeIcon={homeIconNotActive}
        handleHomeClick={handleHomeClick}
        handleTaskClick={handleTaskClick}
        handleAddClick={handleAddClick}
        handleChatClick={handleChatClick}
        handleProfileClick={handleProfileClick}
      />
    </>
  );
}

export default Taskpage;
