import { useState } from "react";
import CircleProgress from "./CircleProgress";

function Progress() {
  const [percentage, setPercentage] = useState(35);
  return (
    <div className="progress">
      <h2>Running Task</h2>
      <h4>65</h4>
      <div className="progress-di">
        <div>
          <CircleProgress percentage={percentage} circleWidth="200" />
          <input
            type="range"
            min="1"
            max="100"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="progress-input"
          />
        </div>
      </div>
    </div>
  );
}

export default Progress;
