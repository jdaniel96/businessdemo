import React from "react";
import {AiOutlineShopping} from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

function NavBar () {
    return (
        <nav class="navbar navbar-expand-lg bg-light" style={{height:'80px'}}>
            <div class="container-fluid">
                <AiOutlineShopping/>
                <a class="navbar-brand me-5" href="#">ShopCart</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown me-4">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item me-4">
                            <a class="nav-link" href="#">Deals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-4" href="#">What's News</a>
                        </li>
                        <li class="nav-item me-4">
                            <a class="nav-link" href="#">Delivery</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input class="form-control me-2 rounded-pill border border-0" type="search" placeholder="Search Product" aria-label="Search" style={{minWidth: '350px', backgroundColor: '#EEEEEE'}}/>
                        <button class="btn ms-3 me-3" type="submit"><span>Account</span></button>
                        <button class="btn" type="submit">Cart</button>
                   </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;