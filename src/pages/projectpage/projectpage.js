import React from "react";
import { useNavigate } from "react-router-dom";
import ChatMessageModal from "../../components/ChatMessageHeader";
import p3 from "../../assets/images/p3.png";
import {
  addIconWhiteSmall,
  chatActive,
  headerBackIcon,
} from "../../Utils/tools";

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
          <div className="projectpage__items">
            <div className="projectpage__items-top">
              <img src={p3} alt="" />
              <div className="projectpage__items-topmiddle">
                <p className="projectpage__name">Ushy Dashboard</p>
                <p className="projectpage__category">Design</p>
              </div>
              <div className="projectpage__workcount">
                <p>15/20</p>
              </div>
            </div>
            <div className="projectpage__items-bottom">
              <div className="projectpage__items-progress">
                <div className="projectpage__items-percentage" />
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => {}} className="showaddWorkspace">
          {addIconWhiteSmall}
        </button>
      </ChatMessageModal>
    </>
  );
}

export default Projectpage;
