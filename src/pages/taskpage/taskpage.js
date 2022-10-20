import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import task1image from "../../assets/images/task1image.jpg";
import task2image from "../../assets/images/task2image.jpg";
import task3image from "../../assets/images/task3image.jpg";
import task4image from "../../assets/images/task4image.jpg";

import {
  addIconActive,
  addIconBlue,
  addIconWhiteSmall,
  chatNotActive,
  deleteSmallIcon,
  dividerr,
  headerBackIcon,
  homeIconNotActive,
  notificationNotActive,
  otherIcon,
  profileNotActive,
  taskNotActive,
  tasksActive,
} from "../../Utils/tools";
import "./taskpage.css";
import TaskListCard from "../../components/TaskListCard";
import TaskCard from "../../components/TaskCard";
import Modal from "../../components/Modal";

function Taskpage() {
  const [activeButton, setActiveButton] = useState("all");
  const [showaddTaskButton, setShowaddTaskButton] = useState(true);
  const [showcreatetask, setShowcreatetask] = useState(false);
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

  const handleAddTaskClick = () => {
    setShowcreatetask(true);
  };

  const handleAddTaskClose = () => {
    setShowcreatetask(false);
  };

  let task1 = [p1];
  let task2 = [p2, p3, p4];
  let task3 = [p4, p1, p5];
  let task4 = [p3, p1, p4, p2, p5];
  let tasksimage = [task1image, task2image, task3image, task4image];

  return (
    <>
      {/* <HeaderBar headerText="Tasks" addIcon={addIconBlue} /> */}

      <div className="workspacepage__cnt">
        <div className="chatpage__cnt-topheader diffbottomna">
          <img src={p2} alt="" />
          <input type="text" placeholder="Search For Task" />
          <button>{otherIcon}</button>
        </div>

        <>
          <div className="chatpage__cnt-chat chatpage__cnt-chatdif">
            <TaskCard
              organizationImage={p2}
              taskImage={tasksimage}
              assigneeImage={task4}
              organizationName="Mmekut"
              taskCreatorName="9trocoder"
              taskCreationTime="2h"
              taskDescription="Create and check Daily Task for the team management and project management with solution provide app."
            />

            <TaskCard
              organizationImage={p1}
              taskImage={[]}
              assigneeImage={[task1]}
              organizationName="Ushy"
              taskCreatorName="Mmekut"
              taskCreationTime="2h"
              taskDescription="This project will need a brand new identity where they will get recognized"
            />

            <TaskCard
              organizationImage={p4}
              taskImage={[]}
              assigneeImage={task3}
              organizationName="9trocoder"
              taskCreatorName="yemicodes"
              taskCreationTime="2h"
              taskDescription="'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. The big lesson in life, baby, is never be scared of anyone or anything. Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth. Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off."
            />

            <button
              className="showaddWorkspace"
              onClick={() => handleAddTaskClick()}
            >
              {addIconWhiteSmall}
            </button>
          </div>
        </>
      </div>

      {showcreatetask && (
        <Modal
          zIndex={10002}
          modalName="New Task"
          closeIcon={headerBackIcon}
          handleCloseClick={handleAddTaskClose}
        >
          <div className="createworkspace__cnt">
            <div className="createworkspace__inputitem">
              <p>TASK TITLE</p>
              <input type="text" placeholder="Make a summary of your task..." />
            </div>
            <div className="createworkspace__inputitem">
              <p>CATEGORY</p>
              <div className="addtaskcategory">
                <button className="addtaskcategoryitems btna">Personal</button>
                <button className="addtaskcategoryitems btnb">Project</button>
                <button className="addtaskcategoryitems btnc">Others</button>
              </div>
            </div>
          </div>
        </Modal>
      )}

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
