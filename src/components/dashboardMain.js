import React, { useEffect, useState } from "react";
import {
  HistorySalesAre,
  ItemsCrud,
  StockReport,
  TopSelling,
} from "./dashboardItems";
import { DoughnutChart } from "../components/doughnutChart.js";
import { LineChart } from "../components/lineChart.js";
import { getTotalSalesEarnings } from "../controllers/sales.controller";
import { Link } from "react-router-dom";

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
    <div
      className="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
      tabIndex="0"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fd" }}
    >
      <div className="row">
        <div className="col-12 col-md-5 pe-1 pt-4">
          <div
            className="bg-white rounded-3 d-flex justify-content-center align-items-center"
            style={{ height: "25em" }}
          >
            <DoughnutChart />
          </div>
        </div>
        <div className="col-12 col-md-7 ps-4 pt-4">
          <div
            className="bg-white rounded-3 d-flex justify-content-center align-items-center"
            style={{ height: "25em" }}
          >
            <LineChart />
          </div>
        </div>

        <div className="col-12 p-2">
          <div className="m-3 p-3" style={{ height: "auto" }}>
            <TopSelling />
          </div>
        </div>
        <div className="col-12 p-4">
          <div className="bg-white rounded-3">
            <StockReport />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Products = () => {
  return (
    <div
      className="tab-pane fade"
      id="pills-products"
      role="tabpanel"
      aria-labelledby="pills-products-tab"
      tabIndex="0"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fd" }}
    >
      <div className="col p-4">
        <div className="bg-white rounded-3">
          <div className="d-flex align-items-center" style={{height: "5rem"}}>
            <Link to={`/AddProduct`}><button className="ms-5 border-0 rounded-3 text-light ps-4 pe-4" style={{height: "3rem", backgroundColor: "#00BD56"}}>Add Products </button></Link>
          </div>
          <ItemsCrud />
        </div>
      </div>
    </div>
  );
};

export const HistorySeles = () => {
  return (
    <div
      className="tab-pane fade"
      id="pills-sales"
      role="tabpanel"
      aria-labelledby="pills-sales-tab"
      tabIndex="0"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fd" }}
    >
      <div className="col p-4">
        <div className="bg-white rounded-3">
          <HistorySalesAre />
        </div>
      </div>
    </div>
  );
};
