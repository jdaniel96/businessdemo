import React from "react";
import { imagenes } from "../assets";

function DashboardNav() {
  return (
    <div className="col-lg-2 p-0" style={{ minHeight: "4rem" }}>
      <nav className="navbar navbar-expand-lg bg-white ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h5
            className="navbar-toggler bg-white"
            style={{ border: "1px solid white" }}
          >
            ShopCart
          </h5>
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                Offcanvas with body scrolling
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="container-fluid d-flex justify-content-center mt-3">
              <div
                className="rounded-circle"
                style={{
                  width: "10vw",
                  height: "10vw",
                  minHeight: "8rem",
                  minWidth: "8rem",

                  backgroundColor: "red",
                }}
              ></div>
            </div>
            <div className="d-flex flex-column nav nav-pills mt-5">
              <button
                className="nav-link active text-start"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style={{ height: "3rem" }}
              >
                Dashboard
              </button>
              <button
                className="nav-link text-start"
                id="pills-products-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-products"
                type="button"
                role="tab"
                aria-controls="pills-products"
                aria-selected="false"
                style={{ height: "3rem" }}
              >
                Products
              </button>
              <button
                className="nav-link text-start"
                id="pills-sales-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-sales"
                type="button"
                role="tab"
                aria-controls="pills-sales"
                aria-selected="false"
                style={{ height: "3rem" }}
              >
                Sales
              </button>
              <button
                className="nav-link text-start"
                id="pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-disabled"
                type="button"
                role="tab"
                aria-controls="pills-disabled"
                aria-selected="false"
                disabled
                style={{ height: "3rem" }}
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNav;
