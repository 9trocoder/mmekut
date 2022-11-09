import { closeIcon } from "../Utils/tools";
import "./components.css";

const CreateModal = ({
  children,
  handleCloseClick,
  modalTitle,
  handleCreate,
  modalPaddingLR,
  modalPaddingTP,
  modalRadius,
  modalHeight,
  zIndex,
  modalAnim,
}) => {
  return (
    <>
      <div className="createmodal__cnt" style={{ zIndex: `${zIndex}` }}>
        <div className="createmodal__overlay" />
        <div
          className="createmodal"
          style={{
            left: `${modalPaddingLR}`,
            right: `${modalPaddingLR}`,
            top: `${modalPaddingTP}`,
            borderRadius: `${modalRadius}`,
            minHeight: `${modalHeight}`,
          }}
        >
          <div className="createmodal__cnt-top">
            <div className="createmodal__close" onClick={handleCloseClick}>
              {closeIcon}
            </div>
            <p className="createmodal__title">{modalTitle}</p>
            <button className="createmodal__btn">Create</button>
          </div>
          <div className="createmodal__cnt-bottom">{children}</div>
        </div>
      </div>
    </>
  );
};

export default CreateModal;
