import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getSpecificProduct } from "../controllers/products.controller";
import { buyProduct } from "../controllers/products.controller";
function ProductPage() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    const productHand = async () => {
      const response = await getSpecificProduct(id);
      if (response) setProduct(response);
    };
    productHand();
  }, [id]);

  useEffect(() => {
    const unmount = () => {
      setQuantity(1);
    };

    return unmount;
  });
  console.log(quantity)
  return (
    <main>
      <NavBar />
      <section>
        <div className="p-5">
          <a href="#/"> Categories / </a>
          <a href="#/"> Categories / </a>
          <a href="#/"> Categories / </a>
          <a href="#/"> Categories / </a>
          <a href="#/"> Categories </a>
        </div>
        <div className="row row-cols-1 row-cols-lg-2 p-5">
          <div className="col d-flex justify-content-center">
            <div
              className="rounded-3 d-flex justify-content-center align-items-center mb-5"
              style={{
                height: "38rem",
                width: "43rem",
                backgroundColor: "#f6f6f6",
              }}
            >
              <img
                src={product?.productPhoto}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt="product detail"
              />
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div style={{ height: "43rem", width: "35rem" }}>
              <h2>{product?.productName}</h2>
              <b>Sobre este artículo</b>
              <p>{product?.productDescription}</p>
              <div className="d-flex">
                <p>
                  <AiFillStar style={{ color: "#09ab0c" }} />
                  <AiFillStar style={{ color: "#09ab0c" }} />
                  <AiFillStar style={{ color: "#09ab0c" }} />
                  <AiFillStar style={{ color: "#09ab0c" }} />
                  <AiFillStar style={{ color: "#09ab0c" }} />
                  (121)
                </p>
              </div>
              <hr></hr>
              <h2>${product.productPrice}</h2>
              <p>
                Only <span>15</span> left!
              </p>
              <hr></hr>
              <div className="container-fluid  d-flex justify-content-between">
                <input
                  type={"number"}
                  onChange={(e) =>
                    setQuantity(e.target.value)
                  }
                  defaultValue={quantity}
                />
                <button
                  className="border border-0 rounded-pill mt-3"
                  style={{
                    backgroundColor: "#013d28",
                    height: "50px",
                    width: "200px",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                  onClick={() => buyProduct(id, 49)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
