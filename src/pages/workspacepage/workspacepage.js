import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AccordionLayout from "../../components/AccordionLayout";
import BigButton from "../../components/BigButton";
import BottomNav from "../../components/BottomNav";
import Modal from "../../components/Modal";
// import WorkspaceTasklist from "../../components/WorkspaceTasklist";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";

import {
  addIconNotActive,
  addIconWhiteSmall,
  // arrowdownbutton,
  chatNotActive,
  chatTextNotActive,
  deleteSmallIcon,
  dividerr,
  editIcon,
  headerBackIcon,
  homeIconNotActive,
  homeTextNotActive,
  notificationActive,
  notificationNotActive,
  otherIcon,
  profileNotActive,
  profileTextNotActive,
  taskActive,
  tasksNotActive,
  workspaceTextActive,
} from "../../Utils/tools";
import "./workspacepage.css";
import TaskListCard from "../../components/TaskListCard";
import WorkspaceCard from "../../components/WorkspaceCard";

function Workspacepage() {
  let navigate = useNavigate();
  // const [activeIndex, setActiveIndex] = useState(1);
  const [showcreateworkspace, setShowcreateworkspace] = useState(false);
  const [showAddWorkspaceMember, setShowAddWorkspaceMember] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState([]);
  const [activeTaskButton, setActiveTaskButton] = useState("workspace");
  const [activeButton, setActiveButton] = useState("all");
  const [showaddTaskButton, setShowaddTaskButton] = useState(true);
  const [showaddTaskMenu, setShowaddTaskMenu] = useState(false);

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
  const handleProfileClick = () => {};
  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {
    navigate("/chat");
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleWorkspaceAddClick = () => {
    setShowcreateworkspace(true);
  };
  const handleShowWorkspaceMemeber = () => {
    setShowAddWorkspaceMember(false);
  };
  const handleWorkspaceAddCloseClick = () => {
    setShowcreateworkspace(false);
  };
  const handleCreateWorkspace = () => {};

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
      {/* <HeaderBar headerText="Project" addIcon={searchBig} /> */}

      <div className="workspacepage__cnt">
        {/* <div className="chatpage__cnt-top">
          <div
            onClick={() => setActiveTaskButton("workspace")}
            className={
              activeTaskButton === "workspace"
                ? "chatpage__cnt-allbutton"
                : "chatpage__cnt-allbuttonnotactive"
            }
          >
            <button>Workspace</button>
          </div>
          <div
            onClick={() => setActiveTaskButton("task")}
            className={
              activeTaskButton === "task"
                ? "chatpage__cnt-allbutton"
                : "chatpage__cnt-allbuttonnotactive"
            }
          >
            <button>Tasks</button>
          </div>
        </div> */}
        <div className="chatpage__cnt-topheader diffbottomna">
          {/* <div
            onClick={() => setActiveChatButton("all")}
            className={
              activeChatButton === "all"
                ? "chatpage__cnt-allbutton"
                : "chatpage__cnt-allbuttonnotactive"
            }
          >
            <button>Direct Messages</button>
          </div>

          <div
            onClick={() => setActiveChatButton("group")}
            className={
              activeChatButton === "group"
                ? "chatpage__cnt-allbutton"
                : "chatpage__cnt-allbuttonnotactive"
            }
          >
            <button>Groups</button>
          </div> */}

          <img src={p2} alt="" />
          <input type="text" placeholder="Search For Workspace" />
          <button>{otherIcon}</button>
        </div>
        {/* <div className="workspacepage__searchcnt">
          <input type="text" placeholder="Search Workspace" />
        </div> */}

        {activeTaskButton === "workspace" && (
          <>
            <div className="chatpage__cnt-chat chatpage__cnt-chatdif">
              {/* <TitleCard name="My Work Spaces" />


              
              {dividerr}
              <LinkCards cardName="Mmekut App" handleClick={() => {}} />
              {dividerr}
              <LinkCards cardName="Ushy" handleClick={() => {}} />
              {dividerr} */}
              {/* <AccordionLayout
          title="Mmekut App"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <WorkspaceTasklist
            projectName="Githarita FrontEnd"
            numtask="15/20"
            progressNumber={50}
          />
          {dividerr}
          <WorkspaceTasklist
            projectName="9trocoder Launching page"
            numtask="4/16"
            progressNumber={20}
          />
        </AccordionLayout>
        <AccordionLayout
          title="Ushy"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <WorkspaceTasklist
            projectName="LC Wakiki"
            numtask="2/4"
            progressNumber={50}
          />
          {dividerr}
          <WorkspaceTasklist
            projectName="Gloria Jeans Clothing"
            numtask="20/20"
            progressNumber={100}
          />
        </AccordionLayout> */}
              <WorkspaceCard
                workspaceName="Mmekut App"
                workspaceMembersImage={workspacemembers}
                workspaceDescription="Mmekut the Super fast Tasking and Chatting app in Nigeria"
                aboutWorkspace="The upe fast tasking app is an app that connects orgainzation and it's workers together in other to make work effective, the app is used for tasking and chatting"
                workspaceCreatorName="9trocoder"
                workspaceCreatorImage={p2}
                workspaceCategory="Mobile App & Web Development"
                workspaceColor="#AD2089"
                workspaceCreatorPosition="Creator"
              />

              <WorkspaceCard
                workspaceName="Mmekut App"
                workspaceMembersImage={workspacemembers}
                workspaceDescription="Mmekut the Super fast Tasking and Chatting app in Nigeria"
                aboutWorkspace="The upe fast tasking app is an app that connects orgainzation and it's workers together in other to make work effective, the app is used for tasking and chatting"
                workspaceCreatorName="9trocoder"
                workspaceCreatorImage={p2}
                workspaceCategory="Mobile App & Web Development"
                workspaceColor="#9B62FA"
                workspaceCreatorPosition="Creator"
              />

              <WorkspaceCard
                workspaceName="Mmekut App"
                workspaceMembersImage={workspacemembers}
                workspaceDescription="Mmekut the Super fast Tasking and Chatting app in Nigeria"
                aboutWorkspace="The upe fast tasking app is an app that connects orgainzation and it's workers together in other to make work effective, the app is used for tasking and chatting"
                workspaceCreatorName="9trocoder"
                workspaceCreatorImage={p2}
                workspaceCategory="Mobile App & Web Development"
                workspaceColor="#826B02"
                workspaceCreatorPosition="Creator"
              />

              <WorkspaceCard
                workspaceName="Mmekut App"
                workspaceMembersImage={workspacemembers}
                workspaceDescription="Mmekut the Super fast Tasking and Chatting app in Nigeria"
                aboutWorkspace="The upe fast tasking app is an app that connects orgainzation and it's workers together in other to make work effective, the app is used for tasking and chatting"
                workspaceCreatorName="9trocoder"
                workspaceCreatorImage={p2}
                workspaceCategory="Mobile App & Web Development"
                workspaceColor="#0D1C63"
                workspaceCreatorPosition="Creator"
              />

              <button
                onClick={() => handleWorkspaceAddClick()}
                className="showaddWorkspace"
              >
                {addIconWhiteSmall}
              </button>
            </div>
          </>
        )}

        {activeTaskButton === "task" && (
          <>
            <div className="chatpage__cnt-chat chatpage__cnt-chatdif">
              {/* <div className="taskpage__cnt-search">
                <input type="text" placeholder="Search" />
              </div> */}
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
                  priority="HIGH"
                  taskDate="45 mins ago"
                />
                <TaskListCard
                  projectName="Food Delivery App"
                  taskTitle="Design two app screens"
                  taskDescription="When you click on this, it will take you to the calender by the right"
                  deleteIcon={deleteSmallIcon}
                  priority="HIGH"
                  taskDate="1hr ago"
                />
                <TaskListCard
                  projectName="Food Delivery App"
                  taskTitle="Design two app screens"
                  taskDescription="See here ...the task screen"
                  deleteIcon={deleteSmallIcon}
                  priority="HIGH"
                  taskDate="15 days ago"
                />
                <TaskListCard
                  projectName="Food Delivery App"
                  taskTitle="Design two app screens"
                  taskDescription="Containers are add to enable the user click on the group"
                  deleteIcon={deleteSmallIcon}
                  priority="HIGH"
                  taskDate="12 days ago"
                />
                <TaskListCard
                  projectName="Food Delivery App"
                  taskTitle="Design two app screens"
                  taskDescription="On the home screen, that first content when you click on the 'view task', it will take you her. see here ....the task screen"
                  deleteIcon={deleteSmallIcon}
                  priority="HIGH"
                  taskDate="45 mins ago"
                />
                <TaskListCard
                  projectName="Food Delivery App"
                  taskTitle="Design two app screens"
                  taskDescription="When you click on this, it will take you to the calender by the right"
                  deleteIcon={deleteSmallIcon}
                  priority="HIGH"
                  taskDate="1hr ago"
                />
                <TaskListCard
                  projectName="Food Delivery App"
                  taskTitle="Design two app screens"
                  taskDescription="See here ...the task screen"
                  deleteIcon={deleteSmallIcon}
                  priority="HIGH"
                  taskDate="15 days ago"
                />
                <TaskListCard
                  projectName="Food Delivery App"
                  taskTitle="Design two app screens"
                  taskDescription="Containers are add to enable the user click on the group"
                  deleteIcon={deleteSmallIcon}
                  priority="HIGH"
                  taskDate="12 days ago"
                />
              </div>
              {showaddTaskMenu && (
                <div className="showaddtaskmenu">
                  <div
                    onClick={() => {
                      setShowaddTaskMenu(false);
                      setShowaddTaskButton(true);
                    }}
                    className="showmetaskmenuoverlay"
                  />
                  <div className="showmetaskmenubody">
                    <div
                      onClick={() => {
                        setShowaddTaskMenu(false);
                        setShowaddTaskButton(true);
                      }}
                      className="showmetaskmenu-item"
                    >
                      <p>Search</p>
                    </div>
                    {dividerr}
                    <div
                      onClick={() => {
                        setShowaddTaskMenu(false);
                        setShowaddTaskButton(true);
                      }}
                      className="showmetaskmenu-item"
                    >
                      <p>Create a new Task</p>
                    </div>
                    {dividerr}
                    <div
                      onClick={() => {
                        setShowaddTaskMenu(false);
                        setShowaddTaskButton(true);
                      }}
                      className="showmetaskmenu-item"
                    >
                      <p>Create a To-do</p>
                    </div>
                    {dividerr}
                    <div
                      onClick={() => {
                        setShowaddTaskMenu(false);
                        setShowaddTaskButton(true);
                      }}
                      className="showmetaskmenu-item"
                    >
                      <p>Assign a Task</p>
                    </div>
                  </div>
                </div>
              )}
              {showaddTaskButton && (
                <button
                  onClick={() => {
                    setShowaddTaskMenu(true);
                    setShowaddTaskButton(false);
                  }}
                  className="showaddWorkspace"
                >
                  {addIconWhiteSmall}
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {showcreateworkspace && (
        <Modal
          zIndex={10001}
          modalName="Create a Workspace"
          closeIcon={headerBackIcon}
          handleCloseClick={handleWorkspaceAddCloseClick}
        >
          <div className="createworkspace__cnt">
            <div className="createworkspace__inputitem">
              <p>WORKSPACE NAME</p>
              <input type="text" placeholder="Enter Workspace Name" />
            </div>
            <div className="createworkspace__inputitem">
              <p>DESCRIPTION</p>
              <textarea type="text" placeholder="Type some description..." />
            </div>
            <div
              className="createworkspace__inputitem"
              onClick={() => setShowAddWorkspaceMember(true)}
            >
              {selected.length < 1 && (
                <>
                  <p>MEMBER</p>
                  <button>
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

            {/* <div className="createworkspace__inputitem">
              <p>PRIVACY</p>
              <div className="createworkspace__privacy-cnt">
                <p>Public</p>
                {arrowdownbutton}
              </div>
            </div> */}
            <BigButton
              buttonName="Create Workspace"
              handleClick={handleCreateWorkspace}
            />
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
        showAddButton={false}
        homeIcon={homeIconNotActive}
        // homeText={homeTextNotActive}
        taskIcon={taskActive}
        // taskText={workspaceTextActive}
        addIcon={addIconNotActive}
        chatIcon={chatNotActive}
        // chatText={chatTextNotActive}
        profileIcon={tasksNotActive}
        notificationIcon={notificationNotActive}
        // profileText={profileTextNotActive}
        handleHomeClick={handleHomeClick}
        handleTaskClick={handleTaskClick}
        handleAddClick={handleWorkspaceAddClick}
        handleChatClick={handleChatClick}
        handleProfileClick={handleProfileClick}
      />
    </>
  );
}

export default Workspacepage;
