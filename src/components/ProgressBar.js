import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const {
    progress,
    circleHeight,
    circleWidth,
    borderWidth,
    borderColor,
    strokeColor,
  } = props;
  let dsd = `calc(${progress} * 31.4 / 100) 31.4`;

  return (
    <>
      <div className="progress__container">
        <svg
          style={{
            borderColor: `${borderColor}`,
            borderWidth: `${borderWidth}`,
            borderStyle: "solid",
            borderRadius: "9999px",
            padding: `${borderWidth}`,
            // backgroundColor: "#73BCFF"
          }}
          height={circleHeight}
          width={circleWidth}
          viewBox="0 0 20 20"
        >
          <circle r="10" cx={circleWidth} cy={circleHeight} fill="white" />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke={strokeColor}
            strokeWidth="10"
            strokeDasharray={dsd}
            transform="rotate(-90) translate(-20)"
          />
        </svg>
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
