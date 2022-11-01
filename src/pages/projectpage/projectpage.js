import React from "react";
import { useNavigate } from "react-router-dom";
import ChatMessageModal from "../../components/ChatMessageHeader";
import p3 from "../../assets/images/p3.png";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import {
  addIconWhiteSmall,
  chatActive,
  headerBackIcon,
} from "../../Utils/tools";
import ProjectsCard from "../../components/ProjectsCard";
import "./projectpage.css";

function Projectpage() {
  let navigate = useNavigate();
  return (
    <>
      <ChatMessageModal
        zIndex={10008}
        handleCloseClick={() => navigate(-1)}
        closeIcon={headerBackIcon}
        userName="Projects"
        // searchIcon={chatActive}
      >
        <div className="projectpage__cnt">
          <ProjectsCard
            projectCategory="Design"
            projectIcon={p3}
            projectName="Ushy Dashboard"
            projectpercentage="80%"
            projectColor="#9B62FA"
            projectWorkCount="15/20"
            handleClick={() => navigate("/projecttaskpage")}
          />
          <ProjectsCard
            projectCategory="Web Development"
            projectIcon={p1}
            projectName="Mmekut Dialog Page"
            projectpercentage="20%"
            projectColor="#AD2089"
            projectWorkCount="8/20"
            handleClick={() => navigate("/projecttaskpage")}
          />
          <ProjectsCard
            projectCategory="Marketing"
            projectIcon={p2}
            projectName="Instagram Shots🎉"
            projectpercentage="40%"
            projectColor="#4B75BF"
            projectWorkCount="10/20"
            handleClick={() => navigate("/projecttaskpage")}
          />
        </div>
        <button onClick={() => {}} className="showaddWorkspace">
          {addIconWhiteSmall}
        </button>
      </ChatMessageModal>
    </>
  );
}

export default Projectpage;
