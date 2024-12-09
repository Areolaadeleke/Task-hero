import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { userData } from "./data";

Chartjs.register(
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LinearScale
);

function BarChart() {
  const data = {
    labels: userData.map((y) => y.year),
    datasets: [
      {
        label: "Numbers of User Gain",
        data: userData.map((gain) => gain.userGain),
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
      <Bar data={data} options={options} className="bar" />
    </div>
  );
}

export default BarChart;
