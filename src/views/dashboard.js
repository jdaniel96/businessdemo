import React from "react";
import { DashboardInicio, Products } from "../components/dashboardMain";
import DashboardNav from "../components/dashboardNav";

function Dashboard() {
  return (
    <div
      className="d-flex"
      style={{ height: "auto", width: "100%", backgroundColor: "#f8f9fd" }}
    >
      <DashboardNav />
      <div className="tab-content container-fluid" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex="0"
          style={{ margin: 0, padding: 0 }}
        >
          <DashboardInicio />
        </div>
        <div
          className="tab-pane fade"
          id="pills-products"
          role="tabpanel"
          aria-labelledby="pills-products-tab"
          tabIndex="0"
          style={{ margin: 0, padding: 0 }}
        >
          <Products />
        </div>
        <div
          className="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabIndex="0"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabIndex="0"
        >
          ...
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
