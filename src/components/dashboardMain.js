import React, { useEffect, useState } from "react";
import { HistoryProductsSales, ItemsCrud, StockReport, TopSelling } from "./dashboardItems";
import { DoughnutChart } from "../components/doughnutChart.js";
import { LineChart } from "../components/lineChart.js";
import { getTotalSalesEarnings } from "../controllers/sales.controller";

export const DashboardInicio = () => {
  const [earnings, setEarnings] = useState(null);
  useEffect(() => {
    const handler = async () => {
      const data = await getTotalSalesEarnings();
      setEarnings(data);
    };
    handler();
  }, []);

  return (
    <main className="container-fluid">
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f9fd",
          marginTop: "1em",
        }}
      >
        <h1
          style={{
            display: "inline",
            fontFamily: "sans-serif",
          }}
        >
          Total Earnings:
        </h1>
        <h1
          style={{
            color: "green",

            display: "inline",
          }}
        >
          ${earnings}
        </h1>
      </div>
      <div
        className="d-flex mt-5 container flex-wrap justify-content-lg-center justify-content-md-center justify-content-center align-items-center align-items-lg-center align-items-md-center align-items-xl-center"
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#f8f9fd",
          justifyContent: "center",
        }}
      >
        <div
          className="rounded-3 col col-xl-4 col-12 d-flex justify-content-center"
          style={{ height: "25em" }}
        >
          <DoughnutChart />
        </div>
        <div
          className="rounded-3 col col-xl-8 col-12 d-flex justify-content-center"
          style={{ height: "25em" }}
        >
          <LineChart />
        </div>
      </div>
      <TopSelling />
      <StockReport />
    </main>
  );
};

export const Products = () => {
  return (
    <main className="container-fluid" style={{ minHeight: "100vh" }}>
      <ItemsCrud />
    </main>
  );
};

export const HistorySeles = () => {
  return (
    <main className="container-fluid" style={{ minHeight: "100vh" }}>
        <HistoryProductsSales/>
    </main>
  )
}