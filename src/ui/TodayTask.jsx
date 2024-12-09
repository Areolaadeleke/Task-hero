import { useState } from "react";
import { HiClock } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function TodayTask() {
  const [percentage, setPercentage] = useState(35);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/detailstask");
  }

  return (
    <div className="today-task">
      <div className="today-div">
        <h2>Task Today</h2>
        <img src="netflix.jpg" alt="netflix" />
        <div className="today-progress">
          <h5>Progress</h5>
          <span>{percentage}%</span>
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          className="today-inputt"
        />
        <h5>
          <HiClock />1 Hour
        </h5>
      </div>
      <div className="today-div2">
        <div className="details">
          <h4>Details</h4>
          <h6>UI/UX Designer</h6>
        </div>
        <ul>
          <li>
            <span>1</span>Understanding the tools in Figma
          </li>
          <li>
            <span>2</span>Understanding the basics of making designs
          </li>
          <li>
            <span>3</span>Design a mobile application with figma
          </li>
        </ul>
        <button onClick={handleClick}>Go To Details</button>
      </div>
    </div>
  );
}

export default TodayTask;
