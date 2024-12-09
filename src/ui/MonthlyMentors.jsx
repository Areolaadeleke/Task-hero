import { useState } from "react";
import { HiBookmark, HiClock, HiPlus, HiStar } from "react-icons/hi";

function MonthlyMentors() {
  const [percentage, setPercentage] = useState(35);
  return (
    <div className="monthly">
      <h2>Monthly Mentors</h2>
      <div className="monthlyy">
        <div className="monthly-div1">
          <div className="monthly-div1-inn">
            <div className="monthly-in">
              <div className="monthly-div1-inner">
                <span>
                  <img src="IMG_1119.HEIC" alt="IMG_1119" className="img1" />
                </span>
                <div>
                  <h5>Areola Adeleke</h5>
                  <h6>UI/UX Design</h6>
                </div>
              </div>

              <div className="monthly-div1-inner-2">
                <h4>
                  <HiPlus /> Follow
                </h4>
              </div>
            </div>
            <div className="monthly-div1">
              <div className="monthly-inn">
                <div className="monthly-div1-inner-2">
                  <h4>
                    <HiBookmark /> 40Task
                  </h4>
                </div>
                <div className="monthly-div1-inner-2">
                  <h4>
                    <HiStar />
                    4.7(750 Reviews)
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="monthly-div1">
          <div className="monthly-div1-inn">
            <div className="monthly-in">
              <div className="monthly-div1-inner">
                <span>
                  <img src="IMG_2463.jpeg" alt="IMG_2463" className="img1" />
                </span>
                <div>
                  <h5>Areola Adeleke</h5>
                  <h6>UI/UX Design</h6>
                </div>
              </div>

              <div className="monthly-div1-inner-2">
                <h4>
                  <HiPlus /> Follow
                </h4>
              </div>
            </div>
            <div className="monthly-div1">
              <div className="monthly-inn">
                <div className="monthly-div1-inner-2">
                  <h4>
                    <HiBookmark /> 40Task
                  </h4>
                </div>
                <div className="monthly-div1-inner-2">
                  <h4>
                    <HiStar />
                    4.7(750 Reviews)
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Upcoming Task</h2>
      <div className="monthlyy">
        <div className="monthly-div2">
          <img src="netflix.jpg" alt="netflix" className="monthly-div2-img" />
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
          <img src="netflix.jpg" alt="netflix" className="monthly-div2-img" />
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
            4days Left
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MonthlyMentors;
