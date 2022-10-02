import { dividerr } from "../Utils/tools";
import "./components.css";

const Modal = ({ children, handleCloseClick, closeIcon, modalName }) => {
  return (
    <>
      <div className="modal__cnt">
        <div className="modal__cnt-body">
          <div className="modal">
            <div className="modal__cnt-top"><button onClick={handleCloseClick}>{closeIcon}</button>
              <p>{modalName}</p>
              
            </div>
            <div className="modal__cnt-bottom">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
