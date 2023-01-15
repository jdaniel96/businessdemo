import React from "react";
import HeroSection from "../components/heroSection";
import NavBar from "../components/navBar";
import ProductsSections from "../components/productsSections";

function HomePage ({product}) {
    console.log(product)
    return (
        <main>
            <NavBar/>
            <HeroSection/>
            <ProductsSections product={product}/>
        </main>
    )
}

export default HomePage;