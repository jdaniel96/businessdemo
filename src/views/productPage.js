import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import {AiFillStar, AiOutlineHeart} from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getSpecificProduct } from "../controllers/products.controller";
import { async } from "@firebase/util";

function ProductPage () {
    const [product, setProduct] = useState({});
    

    const {id} = useParams();
    
    useEffect(()=>{
        const productHand = async () => {
            const response = await getSpecificProduct(id)
            if(response) setProduct(response)
            console.log("pPage", response)
        } 
        productHand();
    },[])
    
    console.log("pproduct",product)
    return (
        <main>
            <NavBar/>
            <section>
                <div className="p-5">
                    <a> Categories / </a>
                    <a> Categories / </a>
                    <a> Categories / </a>
                    <a> Categories / </a>
                    <a> Categories </a>
                </div>
                <div class="row row-cols-1 row-cols-lg-2 p-5">
                    <div className="col d-flex justify-content-center">
                        <div className="rounded-3 d-flex justify-content-center align-items-center" style={{height: "38rem", width: "43rem", backgroundColor: "#f6f6f6"}}>
                            <img src={product.productPhoto}style={{height: "95%"}} />
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <div style={{height: "43rem", width: "35rem"}}>
                        <h2>{product.productName}</h2>
                        <b>Sobre este artículo</b> 
                        <p>{product.productDescription}</p>
                        <div className="d-flex">
                            <p><AiFillStar style={{color: "#09ab0c"}}/><AiFillStar style={{color: "#09ab0c"}}/><AiFillStar style={{color: "#09ab0c"}}/><AiFillStar style={{color: "#09ab0c"}}/><AiFillStar style={{color: "#09ab0c"}}/>(121)</p>
                        </div>
                        <hr></hr>
                        <h2>${product.productPrice}</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <hr></hr>
                        <div className="container-fluid">
                        <button
                        className="border border-0 rounded-pill mt-3" 
                        style={{
                            backgroundColor: '#f6f6f6', 
                            height: "50px", width: "200px",
                            borderColor: "#013d28", 
                            color: "#013d28", fontSize: "1.1rem"}}
                        >+ 1 -</button>
                        </div>
                        
                        <div className="container-fluid  d-flex justify-content-between">
                            <button
                            className="border border-0 rounded-pill mt-3" 
                            style={{
                                backgroundColor: '#013d28', 
                                height: "50px", width: "200px", 
                                color: "white", fontSize: "1.1rem"}}>
                            Buy Now
                            </button>
                            <button
                            className="border rounded-pill mt-3" 
                            style={{
                                backgroundColor: 'white', 
                                height: "50px", width: "200px",
                                borderColor: "#013d28", 
                                color: "#013d28", fontSize: "1.1rem"}}>
                            Add to Cart
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductPage;