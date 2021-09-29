import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChartDemo() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020(in Million)",
        data: [3, 2, 2, 1, 5],
        fill: true,
        backgroundColor: ["green", "blue", "orange", "skyblue", "yellow"],
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Doughnut Chart",
      },
    },
  };
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChartDemo;
