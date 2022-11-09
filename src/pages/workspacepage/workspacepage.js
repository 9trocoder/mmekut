import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
// import AccordionLayout from "../../components/AccordionLayout";
import BottomNav from "../../components/BottomNav";
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
  dividerr,
  editIcon,
  homeIconNotActive,
  notificationNotActive,
  otherIcon,
  taskActive,
  tasksNotActive,
} from "../../Utils/tools";
import "./workspacepage.css";
import WorkspaceCard from "../../components/WorkspaceCard";
import CreateModal from "../../components/CreateModal";
import AddMemberModal from "../../components/AddMemberModal";

function Workspacepage() {
  let navigate = useNavigate();
  // const [activeIndex, setActiveIndex] = useState(1);
  const [showcreateworkspace, setShowcreateworkspace] = useState(false);
  const [showAddWorkspaceMember, setShowAddWorkspaceMember] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState([]);
  const [modalPaddingLRc, setModalPaddingLRc] = useState("0px");
  const [modalPaddingTpc, setModalPaddingTpc] = useState("98vh");
  const [theModalAnim, setTheModalAnim] = useState(false);
  const [themeColor, setThemeColor] = useState("#ffffff");

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
  const handleProfileClick = () => {
    navigate("/task");
  };
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
    setThemeColor("#00000080");
  };
  const handleShowWorkspaceMemeber = () => {
    setShowAddWorkspaceMember(false);
    setTheModalAnim(true);
    setModalPaddingTpc("98vh");
    setModalPaddingLRc("0px");
  };
  const handleWorkspaceAddCloseClick = () => {
    setShowcreateworkspace(false);
  };
  const handleWorkspaceClick = () => {
    navigate("/workspace_project");
  };

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
      <Helmet>
        <meta name="theme-color" content={themeColor} />
      </Helmet>
      {/* <HeaderBar headerText="Project" addIcon={searchBig} /> */}

      <div className="workspacepage__cnt">
        <div className="chatpage__cnt-topheader diffbottomna">
          <img src={p2} alt="" />
          <input type="text" placeholder="Search For Workspace" />
          <button>{otherIcon}</button>
        </div>

        <>
          <div className="chatpage__cnt-chat chatpage__cnt-chatdif">
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
              handleWorkspaceClick={handleWorkspaceClick}
            />

            <WorkspaceCard
              workspaceName="Mmekut App"
              workspaceMembersImage={workspacemembers}
              workspaceDescription="Yes we are trying to build this very soon they are gonna see us in the future. Mmekut the Super fast Tasking and Chatting app in Nigeria"
              aboutWorkspace="The super fast tasking app is an app that connects orgainzation and it's workers together in other to make work effective, the app is used for tasking and chatting"
              workspaceCreatorName="9trocoder"
              workspaceCreatorImage={p2}
              workspaceCategory="Mobile App & Web Development"
              workspaceColor="#9B62FA"
              workspaceCreatorPosition="Creator"
              handleWorkspaceClick={handleWorkspaceClick}
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
              handleWorkspaceClick={handleWorkspaceClick}
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
              handleWorkspaceClick={handleWorkspaceClick}
            />

            <button
              onClick={() => handleWorkspaceAddClick()}
              className="showaddWorkspace"
            >
              {addIconWhiteSmall}
            </button>
          </div>
        </>
      </div>

      {showcreateworkspace && (
        <CreateModal
          zIndex={10001}
          modalTitle="New Workspace"
          modalRadius="20px 20px 0px 0px"
          handleCloseClick={handleWorkspaceAddCloseClick}
          modalAnim={theModalAnim}
          modalPaddingLR={modalPaddingLRc}
          modalHeight={modalPaddingTpc}
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
              onClick={() => {
                setShowAddWorkspaceMember(true);
                setTheModalAnim(true);
                setModalPaddingTpc("99vh");
                setModalPaddingLRc("16px");
              }}
            >
              <p>MEMBER</p>
              {selected.length < 1 && (
                <>
                  <button className="addtaskmembers">
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
                  </button>
                </>
              )}

              {selected.length > 1 && (
                <div
                  className="edit__workspace-member"
                  onClick={() => {
                    setShowAddWorkspaceMember(true);
                  }}
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
            </div>
          </div>
        </CreateModal>
      )}

      {showAddWorkspaceMember && (
        <AddMemberModal
          zIndex={10002}
          modalTitle="New Workspace"
          modalRadius="20px 20px 0px 0px"
          handleCloseClick={handleShowWorkspaceMemeber}
          handleCreate={handleShowWorkspaceMemeber}
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
        </AddMemberModal>
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
        handleNotificationClick={() => navigate("/notification")}
      />
    </>
  );
}

export default Workspacepage;
