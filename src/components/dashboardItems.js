import React from "react";
import ProductItems from "./productCard";
import { ItemsTest } from "../testInfo/itemsTest";
import { db } from "../config/db";
import { getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { collection } from "firebase/firestore/lite";
import { AiFillStar, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { IoBagAddSharp } from "react-icons/io5";
import { addProduct, updateProduct } from "../controllers/products.controller";

import { Modal, Button } from "react-bootstrap";
import { deleteProduct } from "../controllers/products.controller";
import { addStock } from "../controllers/products.controller";

export const TopSellingItem = ({ title, description, price, img }) => {
  return (
    <div className="col d-flex justify-content-center align-items-center">
      <div className="card border border-0" style={{ width: "18rem" }}>
        <div
          className="border border-0 rounded-3 position-relative d-flex justify-content-center align-items-center"
          style={{
            height: "18rem",
            width: "18rem",
            backgroundColor: "#f6f6f6",
          }}
        >
          <img
            src={img}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt="product"
          />
        </div>
        <div className="p-2" style={{ width: "100%" }}>
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <h5>{title}</h5>
            <b>
              <sup>$</sup>
              {price}
            </b>
          </div>
          <p>{description}</p>
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
        </div>
      </div>
    </div>
  );
};

export const TopSelling = () => {
  return (
    <>
      <h5 className="mt-5 ms-5">
        Top Selling Products{" "}
        <span style={{ color: "#FFEA20", fontSize: "2rem" }}>
          <AiFillStar />
        </span>
      </h5>
      <div
        className="d-flex mt-3 justify-content-evenly mb-5"
        style={{ height: "30rem", width: "100%", backgroundColor: "#f8f9fd" }}
      >
        <div
          className="rounded-3 d-flex align-items-center"
          style={{ height: "100%", width: "96.5%" }}
        >
          {ItemsTest.map((item, index) => {
            return (
              <TopSellingItem
                key={index}
                id={item.id}
                title={item.title}
                description={item.note}
                price={item.price}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export const StockTable = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "products");
  useEffect(() => {
    const getDbProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDbProducts();
  }, []);

  return (
    <div className="ps-5 pe-5 mt-4">
      <table className="table table-borderless table-hover">
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
          {products?.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">
                  <div
                    className="border border-0 rounded-5"
                    style={{
                      height: "4rem",
                      width: "4rem",
                      backgroundImage: `url(${item?.productPhoto})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </th>
                <td className="pt-4">{item?.productName}</td>
                <td className="pt-4">$ {item?.productPrice}</td>
                <td className="pt-4">{item?.id}</td>
                <td className="pt-4">{item?.stock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const ItemsTable = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "products");

  //   const [newProductData, setNewProductData] = useState({
  //     productName: "",
  //     productDescription: "",
  //     productPhoto: "",
  //     productPrice: "",
  //     stock: "",
  //   });

  //   <>
  //     <input
  //       onChange={(e) =>
  //         setNewProductData({ ...newProductData, productName: e.target.value })
  //       }
  //       type="text"
  //       placeholder="product name"
  //     />
  //     <input
  //       onChange={(e) =>
  //         setNewProductData({
  //           ...newProductData,
  //           productDescription: e.target.value,
  //         })
  //       }
  //       type="text"
  //       placeholder="product description"
  //     />
  //     <input
  //       onChange={(e) =>
  //         setNewProductData({ ...newProductData, productPhoto: e.target.value })
  //       }
  //       type="file"
  //       placeholder="product photo"
  //     />
  //     <input
  //       onChange={(e) =>
  //         setNewProductData({ ...newProductData, productPrice: e.target.value })
  //       }
  //       type="text"
  //       placeholder="product price"
  //     />
  //     <input
  //       onChange={(e) =>
  //         setNewProductData({ ...newProductData, stock: e.target.value })
  //       }
  //       type="text"
  //       placeholder="product stock"
  //     />
  //     <button onClick={() => addProduct(newProductData)}>create add</button>
  //   </>;

  useEffect(() => {
    const getDbProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDbProducts();
  }, []);

  const [showDelete, setShowDelete] = useState(true);
  const [showAddStock, setShowAddStock] = useState(false);

  return (
    <div className="ps-5 pe-5 mt-4">
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Id</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => {
            return (
              <tr key={index}>
                {showAddStock && (
                  <Modal
                    centered={true}
                    onHide={setShowAddStock(false)}
                    show={showAddStock}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Modal content goes here</Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setShowAddStock(false)}
                      >
                        Close
                      </Button>
                      {/* add input to specify amount of stock */}
                      <Button
                        onClick={() =>
                          addStock(item.id, "quantity of stock to add here")
                        }
                        variant="primary"
                      >
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}
                {showDelete && (
                  <Modal
                    centered={true}
                    onHide={setShowDelete(false)}
                    show={showDelete}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Modal content goes here</Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setShowDelete(false)}
                      >
                        Close
                      </Button>
                      <Button
                        onClick={() => deleteProduct(item.id)}
                        variant="primary"
                      >
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}

                <th scope="row">
                  <div
                    className="border border-0 rounded-5"
                    style={{
                      height: "4rem",
                      width: "4rem",
                      backgroundImage: `url(${item?.productPhoto})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </th>
                <td className="pt-4">{item?.productName}</td>
                <td className="pt-4">$ {item?.productPrice}</td>
                <td className="pt-4">{item?.id}</td>
                <td className="pt-4">15</td>
                <td className="pt-4">
                  <button
                    className="rounded-circle border border-0 me-2 text-white pb-1"
                    style={{
                      height: "3rem",
                      width: "3rem",
                      backgroundColor: "black",
                    }}
                  >
                    <AiFillEdit />
                  </button>
                  <button
                    className="rounded-circle border border-0 me-2 text-white pb-1"
                    onClick={() => setShowAddStock(true)}
                    style={{
                      height: "3rem",
                      width: "3rem",
                      backgroundColor: "#00BD56",
                    }}
                  >
                    <IoBagAddSharp />
                  </button>
                  <button
                    onClick={() => setShowDelete(true)}
                    className="rounded-circle border border-0 me-2 text-white pb-1"
                    style={{
                      height: "3rem",
                      width: "3rem",
                      backgroundColor: "red",
                    }}
                  >
                    <BsFillTrashFill />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const StockReport = () => {
  return (
    <div
      className="d-flex mt-3 justify-content-evenly mb-5"
      style={{ height: "auto", width: "100%", backgroundColor: "#f8f9fd" }}
    >
      <div
        className="rounded-3"
        style={{ height: "100%", width: "96.5%", backgroundColor: "white" }}
      >
        <h5 className="mt-5 ps-5">Stock Report</h5>
        <StockTable />
      </div>
    </div>
  );
};

export const ItemsCrud = () => {
  return (
    <div
      className="d-flex mt-3 justify-content-evenly mb-5"
      style={{ height: "auto", width: "100%", backgroundColor: "#f8f9fd" }}
    >
      <div
        className="rounded-3"
        style={{ height: "100%", width: "96.5%", backgroundColor: "white" }}
      >
        <h5 className="mt-5 ps-5">Stock Report</h5>
        <ItemsTable />
      </div>
    </div>
  );
};
