import "./components.css";

const LeftChat = ({ message, messageTime, deliveryStatus }) => {
  return (
    <>
      <div className="leftChat__cnt">
        <p>{message}</p>
        <div className="leftChat__cnt-delivery">
          <p>{messageTime}</p>
          {deliveryStatus}
        </div>
      </div>
      <div className="leftChat__cnticon" />
    </>
  );
};

export default LeftChat;
