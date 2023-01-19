import React from "react";
import { DashboardInicio, HistorySeles, Products } from "../components/dashboardMain";
import DashboardNav from "../components/dashboardNav";

function Dashboard() {
  return (
    <div class="container-fluid text-center bg-white">
      <div class="row" style={{height: "100vh"}}>
      <DashboardNav />
      <div className="tab-content col-lg-10" id="pills-tabContent" style={{minHeight: "100vh", backgroundColor: "#f8f9fd"}}>
        <DashboardInicio/>
        <Products/>
        <HistorySeles/>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
