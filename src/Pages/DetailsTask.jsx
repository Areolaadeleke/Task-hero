import { HiClock, HiPlus, HiUserGroup } from "react-icons/hi";

function DetailsTask() {
  return (
    <div className="task">
      <div className="task-div1">
        <img src="image2.jpg" alt="image2" />
        <h4>Creating Awesome Mobile Apps</h4>
        <h5>
          UI/UX Design.App Design
          <span>
            <HiPlus />
            Get Mentors
          </span>
        </h5>
        <h5>
          <HiUserGroup />
          200 Students Involed
          <span>
            <HiClock />1
          </span>
        </h5>

        <div className="Description">
          <h4>Descrition</h4>
          <p>
            Follownewctoutoralabove.Under.tand
            nowtousoeachtoolint.riomaaoolication.alsoldar how to make a good
            andcorrect design. Starting from spacing, typography, content, and
            manyother design hierarchies. Then try to make it yourself with your
            imagination and inspiration.
          </p>
        </div>
        <h4>Essence of Assessment</h4>
        <ul>
          <li>Understanding the tools in Figma</li>
          <li>Understand the basic of using designs</li>
          <li>Designing a mobile application using figma</li>
          <li>Presenting the design flow</li>
        </ul>
      </div>
      <div className="task-div2">
        <h6>Assigned Assignment</h6>
        <h4>Creating Awesome Mobile App</h4>
        <h6>
          UIUX Design <span>Apps Design</span>
        </h6>
        <div className="student-details">
          <h6>Student Details</h6>
          <p>
            Student name <span>Skylar Dias</span>
          </p>
          <p>
            Student class <span>MIPA2</span>
          </p>
          <p>
            Student Number <span>10</span>
          </p>

          <h6>File Task</h6>

          <p>
            Last Modified <span>1july 2022</span>
          </p>
          <p>File submissions</p>
          <input type="file" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsTask;
