const BigButton = ({ buttonName, handleClick }) => {
  return (
    <>
      <button onClick={handleClick} className="bigButton_cnt">
        <p>{buttonName}</p>
      </button>
    </>
  );
};

export default BigButton;
