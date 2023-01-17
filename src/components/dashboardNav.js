import React from "react";
import { imagenes } from "../assets";

function DashboardNav() {
  return (
    <aside className="bg-white" style={{ height: "auto", width: "auto" }}>
      <div
        className="d-flex flex-column p-3 justify-content-between"
        style={{ width: "inherit", height: "60vh" }}
      >
        <a
          className="navbar-brand text-center"
          style={{ fontSize: "2rem" }}
          href="/#"
        >
          Admin
        </a>
        <div className="container-fluid d-flex justify-content-center mb-3">
          <div
            className="rounded-circle"
            style={{
              width: "13rem",
              height: "13rem",
              backgroundImage: `url(${imagenes.userImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="d-flex flex-column nav nav-pills">
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
            id="pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-Sales"
            type="button"
            role="tab"
            aria-controls="pills-Sales"
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
    </aside>
  );
}

export default DashboardNav;
