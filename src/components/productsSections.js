import React from "react";
import ProductItems from "./productCard";
import { ItemsTest } from "../testInfo/itemsTest";

function ProductsSections () {
    return (
        <section className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="container-fluid">
                <h2 className="mt-5">Popular products</h2>
                <div class="mt-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-4">
                    {ItemsTest.map((items, index) => {
                        console.log(items)
                        return (
                            <ProductItems key={index} id={items.id} title={items.title} note={items.note} price={items.price} img={items.img}/>
                        )
                    })}

                </div>
            </div>
            </section>
    )
}

export default ProductsSections;