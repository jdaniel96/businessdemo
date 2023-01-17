import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getSalesHistory } from "../controllers/sales.controller";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const handlerSales = async () => {
      const data = await getSalesHistory();
      setInfo(data);
    };
    handlerSales();
  }, []);

  const data = {
    labels: info.map((sale) => sale.productName),
    datasets: [
      {
        label: "Product Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};
