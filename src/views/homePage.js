import React from "react";
import HeroSection from "../components/heroSection";
import NavBar from "../components/navBar";
import ProductsSections from "../components/productsSections";

function HomePage() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ProductsSections />
    </main>
  );
}

export default HomePage;
