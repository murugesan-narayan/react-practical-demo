import React from "react";
import { Bar } from "react-chartjs-2";

function BarChartDemo() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020(in Million)",
        data: [3, 2, 2, 1, 5],
        borderColor: ["orange"],
        fill: true,
      },
      {
        label: "Sales for 2019(in Million)",
        data: [1, 3, 2, 2, 3],
        borderColor: ["yellow"],
        backgroundColor: ["lightblue"],
        fill: true,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 6,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartDemo;
