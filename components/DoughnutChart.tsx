"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  //get all account form data base
  const accountNames = accounts.map((a) => a.name);

  //get all balance form data base
  const balances = accounts.map((a) => a.currentBalance);

  const data = {
    datasets: [
      {
        label: "Banks",
        data: balances,
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accountNames,
  };
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          cutout: "60%",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
