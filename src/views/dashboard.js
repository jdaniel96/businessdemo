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
      <div class="tab-content container-fluid" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <DashboardInicio />
        </div>
        <div
          class="tab-pane fade"
          id="pills-products"
          role="tabpanel"
          aria-labelledby="pills-products-tab"
          tabindex="0"
        >
          <Products />
        </div>
        <div
          class="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabindex="0"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
