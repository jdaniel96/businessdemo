import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light" style={{ padding: "1em" }}>
      <div class="container-fluid">
        <AiOutlineShopping />
        <Link class="navbar-brand me-5" to="/">
          Business Icon
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown me-4">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" href="#">
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Category 2
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Category 3
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item me-4">
              <Link class="nav-link" href="#">
                Deals
              </Link>
            </li>
            <li class="nav-item me-4">
              <Link class="nav-link" href="#">
                Delivery ?
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <input
              class="form-control me-2 rounded-pill border border-0"
              type="search"
              placeholder="Search Product"
              aria-label="Search"
              style={{ minWidth: "350px", backgroundColor: "#EEEEEE" }}
            />

            <button class="btn" type="submit">
              Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
