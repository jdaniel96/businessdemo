import React from "react";
import { imagenes } from "../assets";

function HeroSection() {
  return (
    <section
      className="d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-2"
      style={{ backgroundColor: "#fcf0e3", height: "auto", width: "100%" }}
    >
      <div className="col" style={{ minHeight: "40vh" }}>
        <img
          src={imagenes.img2}
          style={{ height: "100%", width: "100%" }}
          alt="hero assets"
        />
      </div>
      <div className="col ps-5" style={{ minHeight: "40vh" }}>
        <p style={{ fontSize: "3.8rem", color: "#013d28" }}>
          Gab Upto 50% Off On Selected Headphone{" "}
        </p>
        <button
          className="border border-0 rounded-pill mt-3"
          style={{
            backgroundColor: "#013d28",
            height: "50px",
            width: "130px",
            color: "white",
            fontSize: "1.1rem",
          }}
        >
          Buy Now
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
