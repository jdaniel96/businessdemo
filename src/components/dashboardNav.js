import React from "react";
import { imagenes } from "../assets";

function DashboardNav () {
    return (
        <aside className="bg-white" style={{height: "auto", width: "28rem"}}>
            <div className="d-flex flex-column p-3 justify-content-between" style={{width: "100%", height: "60vh"}}>
                <a class="navbar-brand" style={{fontSize:"2rem"}} href="#">ShopCart</a>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="rounded-circle" 
                    style={{
                        width: "13rem", height: "13rem",
                        backgroundImage: `url(${imagenes.userImg})`, 
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}></div>
                </div>
                <div className="d-flex flex-column nav nav-pills">
                    <button class="nav-link active text-start" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" style={{height: "3rem"}}>Dashboard</button>
                    <button class="nav-link text-start" id="pills-products-tab" data-bs-toggle="pill" data-bs-target="#pills-products" type="button" role="tab" aria-controls="pills-products" aria-selected="false" style={{height: "3rem"}}>Products</button>
                    <button class="nav-link text-start" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled style={{height: "3rem"}}>Account</button>
                    <button class="nav-link text-start" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled style={{height: "3rem"}}>Settings</button>
                </div>
            </div>
        </aside>
        
    )
}

export default DashboardNav;