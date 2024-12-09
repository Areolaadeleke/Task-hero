import BarChart from "../Dashboard/BarChart";
import LineChart from "../Dashboard/LineChart";

//import PieChart from "../Dashboard/PieChart";
import MonthlyMentors from "../ui/MonthlyMentors";
import Progress from "../ui/Progress";
import TodayTask from "../ui/TodayTask";
import { useState } from "react";

function Dashboard() {
  const [pickDate, setPickDate] = useState(new Date());
  return (
    <div className="dashboard">
      <div>
        <div className="dash-firstDiv">
          <div>
            <h4>Pick a Date</h4>
            <input
              type="date"
              value={pickDate}
              onChange={(e) => setPickDate(e.target.value)}
            />
            <Progress />
            <LineChart />
          </div>
        </div>
        <div>
          <MonthlyMentors />
        </div>
      </div>

      <div>
        <BarChart />
        <TodayTask />
      </div>
    </div>
  );
}

export default Dashboard;
