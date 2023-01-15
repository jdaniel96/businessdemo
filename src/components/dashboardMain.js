import React from "react"
import { StockReport, TopSelling } from "./dashboardItems";

function DashboardMain () {
    return (
        <main className="container-fluid">
            <div className="d-flex mt-5 justify-content-evenly" style={{height: "25rem", width: "100%", backgroundColor: "#f8f9fd"}}>
                <div className="rounded-3" style={{height: "100%", width: "35%", backgroundColor: "white"}}></div>
                <div className="rounded-3" style={{height: "100%", width: "60%", backgroundColor: "white"}}></div>
            </div>
            <TopSelling/>
            <StockReport/>
        </main>
    )
}

export default DashboardMain;