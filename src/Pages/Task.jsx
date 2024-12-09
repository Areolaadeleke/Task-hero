import { useState } from "react";
import { HiClock } from "react-icons/hi";

function Task() {
  const [percentage, setPercentage] = useState(35);
  return (
    <div className="tasks">
      <h3>Time Left</h3>
      <div className="task-grid">
        <div className="monthly-div2">
          <img src="image6.jpg" alt="image6" className="monthly-div2-img" />
          <h4>Creating Moblie App Design</h4>
          <h6>UI/UX Design</h6>
          <div className="monthly-progress">
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
          <h4>
            <HiClock />
            3days Left
          </h4>
        </div>

        <div className="monthly-div2">
          <img src="image5.jpg" alt="image5" className="monthly-div2-img" />
          <h4>Creating Moblie App Design</h4>
          <h6>UI/UX Design</h6>
          <div className="monthly-progress">
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
          <h4>
            <HiClock />
            3days Left
          </h4>
        </div>

        <div className="monthly-div2">
          <img src="image4.jpg" alt="image4" className="monthly-div2-img" />
          <h4>Creating Moblie App Design</h4>
          <h6>UI/UX Design</h6>
          <div className="monthly-progress">
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
          <h4>
            <HiClock />
            3days Left
          </h4>
        </div>

        <div className="monthly-div2">
          <img src="image3.jpg" alt="image3" className="monthly-div2-img" />
          <h4>Creating Moblie App Design</h4>
          <h6>UI/UX Design</h6>
          <div className="monthly-progress">
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
          <h4>
            <HiClock />
            3days Left
          </h4>
        </div>

        <div className="monthly-div2">
          <img src="image2.jpg" alt="image" className="monthly-div2-img" />
          <h4>Creating Moblie App Design</h4>
          <h6>UI/UX Design</h6>
          <div className="monthly-progress">
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
          <h4>
            <HiClock />
            3days Left
          </h4>
        </div>

        <div className="monthly-div2">
          <img src="image1.jpg" alt="image1" className="monthly-div2-img" />
          <h4>Creating Moblie App Design</h4>
          <h6>UI/UX Design</h6>
          <div className="monthly-progress">
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
          <h4>
            <HiClock />
            3days Left
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Task;
