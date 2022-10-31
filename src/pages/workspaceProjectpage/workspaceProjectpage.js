import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import p1image from "../../assets/images/p1.png";
import p2image from "../../assets/images/p2.png";
import p3image from "../../assets/images/p3.png";
import p4image from "../../assets/images/p4.png";
import p5image from "../../assets/images/p5.png";
import ChatMessageModal from "../../components/ChatMessageHeader";
import {
  addIconBlue,
  addIconWhiteSmall,
  chatActive,
  headerBackIcon,
  otherIcon,
  searchBig,
} from "../../Utils/tools";
import "./workspaceProjectpage.css";

function WorkspaceProjectpage() {
  const [activeButton, setActiveButton] = useState("overview");
  let navigate = useNavigate();
  const handleCloseClick = () => {
    navigate(-1);
  };
  const workspacemembers = [p1image, p2image, p3image, p4image, p5image];
  return (
    <>
      <ChatMessageModal
        zIndex={10008}
        handleCloseClick={handleCloseClick}
        closeIcon={headerBackIcon}
        userName="Mmekut App"
        searchIcon={chatActive}
        moreIcon={otherIcon}
      >
        <div className="workspaceprojectpage__cnt">
          <div className="workspaceprojectpage__cnt-top">
            <div className="workspaceprojectpage__cnt-navigation">
              {/* <div
                onClick={() => setActiveButton("overview")}
                className={
                  activeButton === "overview"
                    ? "workspaceprojectbutton"
                    : "workspaceprojectbutton__notactive"
                }
              >
                <button>Overview</button>
              </div> */}

              {/* <div
                onClick={() => setActiveButton("project")}
                className={
                  activeButton === "project"
                    ? "workspaceprojectbutton"
                    : "workspaceprojectbutton__notactive"
                }
              >
                <button>Projects</button>
              </div>
              <div
                onClick={() => setActiveButton("Chat")}
                className={
                  activeButton === "Chat"
                    ? "workspaceprojectbutton"
                    : "workspaceprojectbutton__notactive"
                }
              >
                <button>Chat</button>
              </div> */}
            </div>
            <div className="workspacepageabout">
              <p className="workspaceprojectpagename">
                Mobile App & Web Development
              </p>
              <p className="workspaceprojectpagememnum">6 Members</p>
            </div>
            <div className="workspaceprojectpagemem">
              {workspacemembers.length > 4 ? (
                <div className="workspaceprojectimages__cnt">
                  {workspacemembers.slice(0, 4).map((item, index) => (
                    <>
                      <img
                        src={item}
                        alt=""
                        key={index}
                        className="workspaceprojectimg"
                      />
                    </>
                  ))}
                  <div className="workspaceprojectfinalnum">
                    {workspacemembers.length}
                  </div>
                </div>
              ) : (
                <div className="workspaceprojectimages__cnt">
                  {workspacemembers.map((item, index) => (
                    <>
                      <img
                        src={item}
                        alt=""
                        key={index}
                        className="workspaceprojectimg"
                      />
                    </>
                  ))}
                  <div className="workspaceprojectfinalnum">
                    {workspacemembers.length}
                  </div>
                </div>
              )}

              <button>{addIconWhiteSmall}</button>
            </div>
            <p className="workspaceprojectabout">
              The super fast tasking app is an app that connects organisation
              and it's workers together in other tomake work effective, the app
              is used for tasking and chatting.
            </p>
          </div>
        </div>
        <div
          className="workspaceprojectpage__cnt-bottom"
          onClick={() => navigate("/projects")}
        >
          <div className="workspaceprojectpage__cntbottom-items">
            <p className="wspciprojects">Projects</p>
            <p className="wspcinumbers">6</p>
          </div>
        </div>
      </ChatMessageModal>
    </>
  );
}

export default WorkspaceProjectpage;
