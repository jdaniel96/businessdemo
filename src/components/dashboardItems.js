import React from "react"
import { ItemsImg } from "../assets"
import ProductItems from "./productCard"
import { ItemsTest } from "../testInfo/itemsTest"

const imagen = ItemsImg.jbl


export const TopSelling = () => {
    return (
        <>
            <h5 className="mt-5 ms-5">Top Selling Products</h5>
        <div className="d-flex mt-3 justify-content-evenly" style={{height: "30rem", width: "100%", backgroundColor: "#f8f9fd"}}>
            <div className="rounded-3 d-flex justify-content-evenly align-items-center" style={{height: "100%", width: "96.5%", }}>
            { ItemsTest.map((item)=>{
                return (
                    <ProductItems id={item.id} title={item.title} description={item.note} price={item.price} img={item.img}/>
                )
            })           
            }
            </div>
        </div>
        </>
    )
}

export const ItemsTable = () => {
    return (
        <div className="ps-5 pe-5 mt-4">
        <table class="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Id</th>
                    <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
        </table>
        </div>
    )
}

export const StockReport = () => {
    return (
        <div className="d-flex mt-3 justify-content-evenly mb-5" style={{height: "22rem", width: "100%", backgroundColor: "#f8f9fd"}}>
            <div className="rounded-3" style={{height: "100%", width: "96.5%", backgroundColor: "white"}}>
            <h5 className="mt-5 ps-5">Stock Report</h5>
                <ItemsTable/>
            </div>
        </div>
    )
}
