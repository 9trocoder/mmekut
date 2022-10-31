import React from "react";
import { useNavigate } from "react-router-dom";
import ChatMessageModal from "../../components/ChatMessageHeader";
import p3 from "../../assets/images/p3.png";
import {
  addIconWhiteSmall,
  chatActive,
  headerBackIcon,
} from "../../Utils/tools";
import ProjectsCard from "../../components/ProjectsCard";
import "./projectpage.css"

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
          <ProjectsCard projectCategory="Design" projectIcon={p3} projectName="Ushy Dashboard" projectpercentage="50%" projectColor="#9B62FA" projectWorkCount="15/20" />
        </div>
        <button onClick={() => {}} className="showaddWorkspace">
          {addIconWhiteSmall}
        </button>
      </ChatMessageModal>
    </>
  );
}

export default Projectpage;
