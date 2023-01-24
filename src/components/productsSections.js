import React from "react";
import ProductItems from "./productCard";
import { db } from "../config/db";
import { getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { collection } from "firebase/firestore/lite";

function ProductsSections() {
  const [products, setProducts] = useState([]);

  const productsCollection = collection(db, "products");

  useEffect(() => {
    const getDbProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDbProducts();
  }, [productsCollection]);

  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="container-fluid">
        <h2 className="mt-5">Popular products</h2>
        <div className="mt-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-4">
          {products?.map((items, index) => (
            <ProductItems
              key={index}
              id={items?.id}
              title={items?.productName}
              price={items?.productPrice}
              img={items?.productPhoto}
              description={items?.productDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProductsSections;
