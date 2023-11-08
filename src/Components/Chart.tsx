import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  registerables,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import ChartModel from "../Models/ChartModel";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ...registerables
);

const Chart = (props: { key: number; data: ChartModel[] }) => {
  const options: ChartOptions<"bar"> = {
    color: "rgba(255,255,255,0.7)",
    backgroundColor: "rgba(255,255,255,0.7)",
    animation: {
      duration: 2500,
      easing: "easeOutElastic",
      delay: (context) => {
        return context.type === "data" && context.mode === "default"
          ? context.dataIndex * 300
          : 0;
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      subtitle: {
        font: {
          size: 35,
          family: "Arial",
        },
      },
      legend: {
        display: false,
        position: "right",
        labels: {
          padding: 1,
          boxWidth: 10,
          font: {
            size: 15,
            family: "Arial",
          },
          borderRadius: 10,
        },
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
        font: {
          size: 5,
          family: "Arial",
        },
      },
      tooltip: {
        titleFont: { size: 0 },
        bodyFont: { size: 12 },
        titleMarginBottom: 5,
        backgroundColor: "rgba(255,255,255,0.7)",
        titleColor: "rgba(0,0,0,1)",
        bodyColor: "rgba(0,0,0,1)",
        displayColors: true,
        xAlign: "center",
      },
    },
  };

  const divStyle: React.CSSProperties = {
    margin: "5px",
    width: "100%",
  };

  const arbitraryStackKey = "stack1";
  const ret = {
    labels: props.data[0].labels,
    datasets: props.data.map((item, index) => {
      return {
        label: "label" + index,
        data: item.data,
        backgroundColor: item.color,
        stack: arbitraryStackKey,
      };
    }),
  };

  return (
    <div style={divStyle}>
      <Bar key={props.key} options={options} data={ret} />
    </div>
  );
};

export default Chart;
