import React from "react";
import {AiFillStar, AiOutlineHeart} from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductItems ({id,title, note, price, img}) {
    return (
        <div className="col d-flex justify-content-center align-items-center">
            <div className="card border border-0" style={{width: "21rem"}}>
                <div className="border border-0 rounded-3 position-relative d-flex justify-content-center align-items-center" style={{height: '21rem',width: "21rem", backgroundColor: '#f6f6f6'}}>
                    <img src={img} style={{height: "18rem"}}/>
                    <button className="position-absolute top-0 end-0 m-3 btn rounded-circle bg-white" style={{height: "3rem", width: "3rem", fontSize: "1.1rem"}}><AiOutlineHeart/></button>
                </div>
                <div className="p-2" style={{width: "100%"}}>
                    <div className="d-flex justify-content-between" style={{width: "100%"}}>
                    <Link to={`/product/${id}`}><h5>{title}</h5></Link><b><sup>$</sup>{price}</b>
                </div>
                <p>{note}</p>
                <div className="d-flex">
                    <p><AiFillStar style={{color: "#09ab0c"}}/><AiFillStar style={{color: "#09ab0c"}}/><AiFillStar style={{color: "#09ab0c"}}/><AiFillStar style={{color: "#09ab0c"}}/><AiFillStar style={{color: "#09ab0c"}}/>(121)</p>
                </div>
                <button className="btn border border-secondary rounded-pill" style={{width: "8rem"}}>Add to Cart</button>
            </div>
            </div>
        </div>
    )
}

export default ProductItems;