import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getDocs } from "firebase/firestore/lite";
import { collection } from "firebase/firestore/lite";
import { db } from "../config/db";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const productsCollection = collection(db, "products");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getDbProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDbProducts();
  }, []);
  const data = {
    labels: products.map((sale) => sale.productName),
    datasets: [
      {
        label: "Amount Sold",

        data: products.map((sale) => sale.productSales),
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
        borderWidth: 2,
      },
    ],
  };

  return <Doughnut data={data} />;
};
