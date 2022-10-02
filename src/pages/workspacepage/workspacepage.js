import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccordionLayout from "../../components/AccordionLayout";
import BigButton from "../../components/BigButton";
import BottomNav from "../../components/BottomNav";
import HeaderBar from "../../components/HeaderBar";
import Modal from "../../components/Modal";
import TitleCard from "../../components/TitleCard";
import WorkspaceTasklist from "../../components/WorkspaceTasklist";
import {
  addIconBlue,
  addIconWhite,
  arrowdownbutton,
  chatNotActive,
  closeIcon,
  dividerr,
  headerBackIcon,
  homeIconNotActive,
  profileNotActive,
  taskActive,
} from "../../Utils/tools";
import "./workspacepage.css";

function Workspacepage() {
  let navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1);
  const [showcreateworkspace, setShowcreateworkspace] = useState(false);
  const handleProfileClick = () => {};
  const handleTaskClick = () => {
    navigate("/workspace");
  };

  const handleChatClick = () => {};
  const handleAddClick = () => {};
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleWorkspaceAddClick = () => {
    setShowcreateworkspace(true);
  };
  const handleWorkspaceAddCloseClick = () => {
    setShowcreateworkspace(false);
  };
  const handleCreateWorkspace = () => {};

  return (
    <>
      <HeaderBar
        headerText="Workspaces"
        addIcon={addIconBlue}
        handleAddClick={handleWorkspaceAddClick}
      />

      <div className="workspacepage__cnt">
        <TitleCard name="My Work Spaces" />
        <AccordionLayout
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
        </AccordionLayout>
      </div>

      {showcreateworkspace && (
        <Modal
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
            <div className="createworkspace__inputitem">
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
            </div>

            <div className="createworkspace__inputitem">
              <p>PRIVACY</p>
              <div className="createworkspace__privacy-cnt">
                <p>Public</p>
                {arrowdownbutton}
              </div>
            </div>
            <BigButton
              buttonName="Create Workspace"
              handleClick={handleCreateWorkspace}
            />
          </div>
        </Modal>
      )}
      <BottomNav
        homeIcon={homeIconNotActive}
        taskIcon={taskActive}
        addIcon={addIconWhite}
        chatIcon={chatNotActive}
        profileIcon={profileNotActive}
        handleHomeClick={handleHomeClick}
        handleTaskClick={handleTaskClick}
        handleAddClick={handleAddClick}
        handleChatClick={handleChatClick}
        handleProfileClick={handleProfileClick}
      />
    </>
  );
}

export default Workspacepage;
