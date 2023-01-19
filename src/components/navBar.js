import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light"
      style={{ padding: "1em" }}
    >
      <div className="container-fluid">
        <AiOutlineShopping />
        <Link className="navbar-brand me-5 p-2" to="/">
          Business Icon
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown me-4">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Category 2
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Category 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" href="#">
                Deals
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" href="#">
                Delivery ?
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <input
              className="form-control me-2 rounded-pill border border-0"
              type="search"
              placeholder="Search Product"
              aria-label="Search"
              style={{ minWidth: "350px", backgroundColor: "#EEEEEE" }}
            />

            <button className="btn" type="submit">
              Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
