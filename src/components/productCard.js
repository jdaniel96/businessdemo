import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductItems({ id, title, description, price, img }) {
  return (
    <div className="col flex-row d-flex justify-content-center align-items-center">
      <div
        className="card border border-0"
        style={{ width: "21em", height: "auto" }}
      >
        <div
          className="border border-0 rounded-3 position-relative d-flex justify-content-center align-items-center"
          style={{
            height: "20em",
            width: "inherit",
            backgroundColor: "#f6f6f6",
          }}
        >
          <img
            src={img}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt="product"
          />
          <button
            className="position-absolute top-0 end-0 m-3 btn rounded-circle bg-white"
            style={{ height: "3rem", width: "3rem", fontSize: "1.1rem" }}
          >
            <AiOutlineHeart />
          </button>
        </div>
        <div
          className="p-2 d-flex flex-column align-items-start  p-4"
          style={{
            width: "inherit",
            height: "15em",
          }}
        >
          <div
            className="d-flex  justify-content-between"
            style={{ width: "100%" }}
          >
            <Link to={`/product/${id}`}>
              <h5>{title}</h5>
            </Link>

            <b>
              <sup>$</sup>
              {price}
            </b>
          </div>
          <div
            style={{
              width: "100%",
              height: "5em",
              overflow: "scroll",
            }}
          >
            <p>{description}</p>
          </div>
          <div
            style={{ width: "100%", height: "auto" }}
            className="d-flex justify-content-end"
          >
            <p>
              <AiFillStar style={{ color: "#09ab0c" }} />
              <AiFillStar style={{ color: "#09ab0c" }} />
              <AiFillStar style={{ color: "#09ab0c" }} />
              <AiFillStar style={{ color: "#09ab0c" }} />
              <AiFillStar style={{ color: "#09ab0c" }} />
              (121)
            </p>
          </div>
          <button
            className="btn border border-secondary rounded-pill"
            style={{
              height: "auto",
              width: "8em",

              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
