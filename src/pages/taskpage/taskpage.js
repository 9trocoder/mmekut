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
  calendarSmallIcon,
  chatNotActive,
  deleteSmallIcon,
  dividerr,
  editIcon,
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
import BigButton from "../../components/BigButton";

function Taskpage() {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState([]);
  const [showAddWorkspaceMember, setShowAddWorkspaceMember] = useState(false);

  const [activeButton, setActiveButton] = useState("all");
  const [showaddTaskButton, setShowaddTaskButton] = useState(true);
  const [showcreatetask, setShowcreatetask] = useState(false);
  let navigate = useNavigate();

  const handleProfileClick = () => {};
  const handleTaskClick = () => {
    navigate("/workspace");
  };
  const handleShowWorkspaceMemeber = () => {
    setShowAddWorkspaceMember(false);
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

  const onSearch = (text) => {
    setSearchText(text.length > 0 ? text.toLowerCase() : "");
  };

  function filterByText(list, searchText) {
    return list.filter(
      (item) =>
        item.first_name.toLowerCase().search(searchText.toLowerCase()) === 0
    );
  }

  const orgmembers = [
    {
      id: 1,
      first_name: "Alexander",
      position: "UI/Ux",
      image: p1,
    },
    {
      id: 2,
      first_name: "Alex Ayodele",
      position: "Frontend Developer",
      image: p2,
    },
    {
      id: 3,
      first_name: "Mosope",
      position: "User Interface Designer",
      image: p3,
    },
    {
      id: 4,
      first_name: "Oladimeji Emmanuel",
      position: "FullStack Developer",
      image: p4,
    },
    {
      id: 5,
      first_name: "Mmekut Mfon",
      position: "Head of Design",
      image: p5,
    },
  ];
  const filteredList = searchText
    ? filterByText(orgmembers, searchText)
    : orgmembers;
  const handleSelectedWorker = (id) => {
    if (selected.includes(id)) {
      setSelected((prevSelected) => prevSelected.filter((s) => s !== id));
    } else {
      setSelected((prevSelected) => [...prevSelected, id]);
    }
  };
  const workspacemembers = [p1, p2, p3, p4, p5];
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
            <div className="createworkspace__inputitem">
              <div className="addtaskdate">
                <div className="addtaskdateitem">
                  <p className="addtaskdatetitle">Starts</p>
                  <div className="addtaskdate__cnt">
                    <p className="addtaskdate__cnt-date">20 October</p>
                    {calendarSmallIcon}
                  </div>
                </div>
                <div className="addtaskdateitem">
                  <p className="addtaskdatetitle">Ends</p>
                  <div className="addtaskdate__cnt">
                    <p className="addtaskdate__cnt-date">End Date</p>
                    {calendarSmallIcon}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="createworkspace__inputitem"
              onClick={() => setShowAddWorkspaceMember(true)}
            >
              {selected.length < 1 && (
                <>
                  <p>PARTICIPANTS</p>
                  <button className="workspaceaddmemberbutton">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14V12ZM25 14C25.5523 14 26 13.5523 26 13C26 12.4477 25.5523 12 25 12V14ZM14 1C14 0.447715 13.5523 0 13 0C12.4477 0 12 0.447715 12 1H14ZM12 25C12 25.5523 12.4477 26 13 26C13.5523 26 14 25.5523 14 25H12ZM1 14H25V12H1V14ZM12 1V25H14V1H12Z"
                        fill="#0184FB"
                      />
                    </svg>
                    Add Workspace Members
                  </button>
                </>
              )}

              {selected.length > 1 && (
                <div
                  className="edit__workspace-member"
                  onClick={() => setShowAddWorkspaceMember(true)}
                >
                  <p className="selected__members-num">
                    {selected.length} members add
                  </p>
                  <div className="edit__workspace-membericon">{editIcon}</div>
                </div>
              )}

              {selected.length > 4 ? (
                <div className="selected__image_cnt">
                  {selected.slice(0, 4).map((item, index) => (
                    <>
                      <img
                        className={`image${index}`}
                        key={index}
                        src={item}
                        alt=""
                      />
                    </>
                  ))}
                  <div className="selected__image-remaining">
                    {selected.length - 4}
                  </div>
                </div>
              ) : (
                <div className="selected__image_cnt">
                  {selected.map((item, index) => (
                    <>
                      <img
                        className={`image${index}`}
                        key={index}
                        src={item}
                        alt=""
                      />
                    </>
                  ))}
                </div>
              )}
              {/* <>
                {selected.map((item, index) => (
                  <img key={index} src={item} alt="" />
                ))}
              </> */}
            </div>
            <div className="createworkspace__inputitem">
              <p>DESCRIPTION</p>
              <textarea type="text" placeholder="Type some description..." />
            </div>
          </div>
        </Modal>
      )}

      {showAddWorkspaceMember && (
        <Modal
          zIndex={10002}
          modalName="Add Workspace Members"
          closeIcon={headerBackIcon}
          handleCloseClick={handleShowWorkspaceMemeber}
        >
          <div className="workspacesearch">
            <input
              type="text"
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search Members"
            />
          </div>
          <div className="workspace__selected-members">
            {selected.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
          {dividerr}
          <div className="workspace__memberscnt">
            {filteredList.map((item, index) => (
              <>
                <div
                  key={index}
                  style={{ position: "relative" }}
                  className="assignee__cnt"
                  onClick={() => handleSelectedWorker(item.image)}
                >
                  <button
                    key={item.id}
                    type="button"
                    className="assignee__left"
                  >
                    <img src={item.image} alt="" />
                    <div className="assignee__left-profile">
                      <p className="assignee__left-name">{item.first_name}</p>
                      <p className="assignee__left-position">{item.position}</p>
                    </div>
                  </button>

                  <div
                    className={
                      selected.includes(item.image)
                        ? "workspace__selected"
                        : "worspace__notselected"
                    }
                  ></div>
                </div>
                {dividerr}
              </>
            ))}
          </div>

          {/* <div className="">{selected}</div>
        {selected.map((item) => (
          <img src={item} alt="" />
        ))} */}

          <BigButton
            buttonName="Add Members"
            handleClick={handleShowWorkspaceMemeber}
          />
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
