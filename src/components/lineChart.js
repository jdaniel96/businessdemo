import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { getSalesHistory } from "../controllers/sales.controller";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const handlerSales = async () => {
      const data = await getSalesHistory();
      setInfo(data);
    };
    handlerSales();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        // text: "Global Total Sales",
      },
    },
  };

  const data = {
    labels: info.map((sale) => sale.productName),
    datasets: [
      {
        label: "Total Sales",
        data: info.map((sale) => sale.productQuantity),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
