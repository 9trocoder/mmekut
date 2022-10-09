import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AccordionLayout from "../../components/AccordionLayout";
import BigButton from "../../components/BigButton";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import Modal from "../../components/Modal";
import TitleCard from "../../components/TitleCard";
// import WorkspaceTasklist from "../../components/WorkspaceTasklist";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";

import {
  addIconNotActive,
  // arrowdownbutton,
  chatNotActive,
  chatTextNotActive,
  dividerr,
  editIcon,
  headerBackIcon,
  homeIconNotActive,
  homeTextNotActive,
  profileNotActive,
  profileTextNotActive,
  taskActive,
  workspaceTextActive,
} from "../../Utils/tools";
import "./workspacepage.css";
import LinkCards from "../../components/LinkCards";

function Workspacepage() {
  let navigate = useNavigate();
  // const [activeIndex, setActiveIndex] = useState(1);
  const [showcreateworkspace, setShowcreateworkspace] = useState(false);
  const [showAddWorkspaceMember, setShowAddWorkspaceMember] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState([]);

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

  return (
    <>
      <HeaderBar
        headerText="Workspaces"
      />

      <div className="workspacepage__cnt">
        <TitleCard name="My Work Spaces" />
        {dividerr}
        <LinkCards cardName="Mmekut App" handleClick={() => {}} />
        {dividerr}
        <LinkCards cardName="Ushy" handleClick={() => {}} />
        {dividerr}
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
        homeIcon={homeIconNotActive}
        homeText={homeTextNotActive}
        taskIcon={taskActive}
        taskText={workspaceTextActive}
        addIcon={addIconNotActive}
        chatIcon={chatNotActive}
        chatText={chatTextNotActive}
        profileIcon={profileNotActive}
        profileText={profileTextNotActive}
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
