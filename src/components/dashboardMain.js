import React from "react"

function DashboardMain () {
    return (
        <main className="container-fluid">
            <div className="d-flex" style={{height: "6rem", width: "100%", backgroundColor: "white"}}></div>
            <div className="d-flex mt-3 justify-content-evenly" style={{height: "25rem", width: "100%", backgroundColor: "white"}}>
                <div style={{height: "100%", width: "35%", backgroundColor: "red"}}></div>
                <div style={{height: "100%", width: "60%", backgroundColor: "red"}}></div>
            </div>
            <div className="d-flex mt-3" style={{height: "15rem", width: "100%", backgroundColor: "white"}}></div>
            <div className="d-flex mt-3" style={{height: "25rem", width: "100%", backgroundColor: "white"}}></div>
        </main>
    )
}

export default DashboardMain;