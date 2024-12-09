function CircleProgress({ percentage, circleWidth }) {
  console.log(percentage);
  const radius = 85;
  const dasharry = radius * Math.PI * 2;
  const dashOffSet = dasharry - (dasharry * percentage) / 100;
  return (
    <div className="circle">
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dasharry,
            strokeDashoffset: dashOffSet,
          }}
          transform={`rotate (-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className="text">
          {percentage}%
        </text>
      </svg>
      <div className="cc">
        <h4>100</h4>
        <h4>Task</h4>
      </div>
    </div>
  );
}

export default CircleProgress;
