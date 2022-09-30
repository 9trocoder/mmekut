import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const { progress, circleTwoStroke, circleHeight, circleWidth, borderWidth, borderColor, strokeColor } = props;
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
            padding: "5px",
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
            stroke-width="10"
            stroke-dasharray={dsd}
            transform="rotate(-90) translate(-20)"
          />
        </svg>
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
};

export default ProgressBar;
