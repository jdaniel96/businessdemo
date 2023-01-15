import React from "react";
import { ItemsCrud, StockReport, TopSelling } from "./dashboardItems";

export const DashboardInicio = () => {
  return (
    <main className="container-fluid">
      <div
        className="d-flex mt-5 justify-content-evenly"
        style={{ height: "25rem", width: "100%", backgroundColor: "#f8f9fd" }}
      >
        <div
          className="rounded-3"
          style={{ height: "100%", width: "35%", backgroundColor: "white" }}
        ></div>
        <div
          className="rounded-3"
          style={{ height: "100%", width: "60%", backgroundColor: "white" }}
        ></div>
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
