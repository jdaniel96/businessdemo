import React from "react";
import DashboardMain from "../components/dashboardMain";
import DashboardNav from "../components/dashboardNav";

function Dashboard () {
    return (
        <div className="d-flex" style={{height: "125vh", width: "100%", backgroundColor: "#f8f9fd"}}>
            <DashboardNav/>
            <DashboardMain/>
        </div>
    )
}

export default Dashboard;