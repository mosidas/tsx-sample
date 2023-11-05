import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const options: ChartOptions<'bar'> =
    {
        animation: {
            duration: 3500,
            easing: "easeOutElastic",
            delay: (context) => {
                return context.type === 'data' && context.mode === 'default' ? context.dataIndex * 300 : 0;
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins:
        {
            subtitle: {
                font: {
                    size: 35,
                    family: "Arial",
                },
            },
            legend:
            {
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
            title:
            {
                display: true,
                text: "Chart.js Bar Chart",
                font: {
                    size: 5,
                    family: "Arial",
                },
            },
            tooltip: {
                titleFont: { size: 7 },
                bodyFont: { size: 7 },
                titleMarginBottom: 5,
                backgroundColor: "rgba(255,112,162,0.8)",
                titleColor: "rgba(0,0,0,1)",
                bodyColor: "rgba(0,0,0,1)",
                displayColors: true,
                xAlign: "center"
            },
        }
    };

    const labels: string[] = ["1", "2", "3", "4", "5", "6", "7"];
    const data1: number[] = [88, 11, 14, 52, 14, 32, 36];
    const data2: number[] = [22, 31, 17, 32, 24, 62, 66];

    const divStyle: React.CSSProperties = {
        margin: "5px",
        width: "100%",
    };

    const arbitraryStackKey = "stack1";
    const data = {
        labels, // x軸のラベルの配列
        datasets: [
            {
                stack: arbitraryStackKey,
                label: "red", // 凡例
                data: data1,        // データの配列(labelsと要素数同じ)
                backgroundColor: "rgba(255, 99, 132, 0.5)" // グラフの棒の色
            },
            {
                stack: arbitraryStackKey,
                label: "blue",
                data: data2,
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            }
        ]
    };

    return (
        <div style={divStyle}>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Chart
