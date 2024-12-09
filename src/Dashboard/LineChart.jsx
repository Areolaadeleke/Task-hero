import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LinearScale
);

function LineChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", " Thur", "Fri"],
    datasets: [
      {
        label: "Numbers Of task Compeleted during the week",
        data: [10, 20, 15, 30, 50],
        backgroundcolor: "red",
        bodercolor: ["rgba(54,162,235,1)"],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        type: "linear",
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} className="line" />
    </div>
  );
}

export default LineChart;
