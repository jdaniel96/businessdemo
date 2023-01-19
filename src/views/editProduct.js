import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import {
  getSpecificProduct,
  updateProduct,
} from "../controllers/products.controller";
import { loginGoogle } from "../services/loginGoogle.service";

function EditProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const [newProductData, setNewProductData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    stock: "",
    productPhoto: "",
  });

  useEffect(() => {
    const productHand = async () => {
      const response = await getSpecificProduct(id);
      if (response) setProduct(response);
    };
    productHand();
  }, [id]);

  //TODO diomio queseto dió
  return (
    <main>
      <NavBar />
      <section>
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
                src={product.productPhoto}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt="product detail"
              />
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div style={{ height: "43rem", width: "35rem" }}>
              <div>
                <input
                  onChange={(e) =>
                    setNewProductData({
                      ...newProductData,
                      productName: e.target.value,
                    })
                  }
                  className="border border-0"
                  type="text"
                  placeholder="product name"
                  defaultValue={product?.productName}
                  style={{ height: "4rem", width: "100%", fontSize: "2rem" }}
                />
              </div>
              <b>Sobre este artículo</b>
              <div>
                <textarea
                  onChange={(e) =>
                    setNewProductData({
                      ...newProductData,
                      productDescription: e.target.value,
                    })
                  }
                  placeholder="product description"
                  defaultValue={product?.productDescription}
                  style={{ width: "100%" }}
                  className="border border-0"
                ></textarea>
              </div>
              <div className="d-flex ">
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
              <div className="d-flex">
                <p
                  className="d-flex align-items-center"
                  style={{ fontSize: "1.5rem", height: "3rem" }}
                >
                  $
                </p>
                <input
                  onChange={(e) =>
                    setNewProductData({
                      ...newProductData,
                      productPrice: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="product price"
                  defaultValue={product?.productPrice}
                  className="border border-0 ms-2"
                  style={{ height: "3rem", width: "100%", fontSize: "1.5rem" }}
                />
              </div>

              <p>
                Only{" "}
                <input
                  onChange={(e) =>
                    setNewProductData({
                      ...newProductData,
                      stock: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="0"
                  defaultValue={product?.stock}
                  className="border border-0 ms-2"
                  style={{ width: "4rem", fontSize: "1rem" }}
                />{" "}
                left!
              </p>
              <hr></hr>
              <div className="container-fluid  d-flex justify-content-between">
                <button
                  className="border border-0 rounded-pill mt-3 me-4"
                  style={{
                    backgroundColor: "#013d28",
                    height: "50px",
                    width: "200px",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                  onClick={() => {
                    updateProduct(id, newProductData);
                  }}
                >
                  Update
                </button>
                <button
                  className="border border-0 rounded-pill mt-3"
                  style={{
                    backgroundColor: "#f6f6f6",
                    height: "50px",
                    width: "200px",
                    borderColor: "#013d28",
                    color: "#013d28",
                    fontSize: "1.1rem",
                  }}
                >
                  Cancel
                </button>

                <button onClick={() => loginGoogle()}></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EditProduct;
