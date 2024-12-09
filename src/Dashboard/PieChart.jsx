import { Pie } from "react-chartjs-2";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { userData } from "./data";

Chartjs.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: userData.map((y) => y.year),
    datasets: [
      {
        label: "Numbers Of user Lost",
        data: userData.map((l) => l.userLost),
        backgroundcolor: "red",
        bodercolor: ["rgba(54,162,235,1)"],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // this is for the x-axis
      },
      y: {
        type: "linear", // this is for the y-axis (the linear scale)
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} className="pie" />
    </div>
  );
}

export default PieChart;
