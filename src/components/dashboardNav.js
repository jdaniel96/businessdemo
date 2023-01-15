import React from "react";

function DashboardNav () {
    return (
        <aside className="bg-white" style={{width: "18rem", height: "auto"}}>
            <div className="d-flex flex-column p-3 justify-content-between" style={{width: "100%", height: "60vh"}}>
            <a class="navbar-brand" style={{fontSize:"2rem"}} href="#">ShopCart</a>
            <div className="container-fluid d-flex justify-content-center">
                <div className="rounded-circle" style={{width: "10rem", height: "10rem", backgroundColor: "red"}}></div>
            </div>
            <div className="d-flex flex-column">
                <button className="mt-1 border border-0 rounded-2 text-start bg-white" style={{height: "3rem"}}>O Dashboard</button>
                <button className="mt-1 border border-0 rounded-2 text-start bg-white" style={{height: "3rem"}}>O Products</button>
                <button className="mt-1 border border-0 rounded-2 text-start bg-white" style={{height: "3rem"}}>O Orders</button>
                <button className="mt-1 border border-0 rounded-2 text-start bg-white" style={{height: "3rem"}}>O Products</button>
                <button className="mt-1 border border-0 rounded-2 text-start bg-white" style={{height: "3rem"}}>O Orders</button>
            </div>
            </div>
        </aside>
    )
}

export default DashboardNav;