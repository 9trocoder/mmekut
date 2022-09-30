import "./components.css";

const HomepageTaskCard = ({
  workspaceName,
  taskTitle,
  progressNumber,
  handleClick,
  cardColor,
  progressColor,
}) => {
  return (
    <>
      <div
        onClick={handleClick}
        style={{ backgroundColor: `${cardColor}` }}
        className="homepageTaskCard__cnt"
      >
        <p className="homepageTaskCard__cnt-workspaceName">{workspaceName}</p>
        <p className="homepageTaskCard__cnt-taskTitle">{taskTitle}</p>
        <div className="homepageTaskCard__cnt-progress">
          <p>{progressNumber}%</p>
          <div className="hptccpbar">
            <div
              className="hptccpbarstrength"
              style={{
                maxWidth:`${progressNumber}%`,
                backgroundColor: `${progressColor}`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageTaskCard;
