import React from "react";
import { ItemsTest } from "../testInfo/itemsTest";
import { db } from "../config/db";
import { getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { collection } from "firebase/firestore/lite";
import { AiFillStar, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { IoBagAddSharp } from "react-icons/io5";
import { Modal, Button } from "react-bootstrap";
import { deleteProduct } from "../controllers/products.controller";
import { Link } from "react-router-dom";
import { getSalesHistory } from "../controllers/sales.controller";

export const TopSellingItem = ({ title, description, price, img }) => {
  return (
    <div
      className="card m-3 border border-0"
      style={{ minWidth: "18rem", minHeight: "23rem" }}
    >
      <div
        className="border border-0 rounded-3 d-flex justify-content-center align-items-center"
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
      <div className="p-2 text-start" style={{ width: "100%" }}>
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
  );
};

export const TopSelling = () => {
  return (
    <div
      className="d-flex p-5 scollable"
      style={{ height: "auto", width: "auto", overflow: "scroll" }}
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
  }, [productsCollection]);

  return (
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
              <th scope="row" className="d-flex justify-content-center">
              <div
                  className="border border-0 rounded-5 "
                  style={{
                    height: "4rem",
                    width: "4rem",
                  }}
                >
                  <img
                    src={item?.productPhoto}
                    className="border border-0 rounded-5"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
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
  );
};

export const ItemsTable = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "products");
  const [showDelete, setShowDelete] = useState(false);
  const [showAddStock, setShowAddStock] = useState(false);

  useEffect(() => {
    const getDbProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDbProducts();

    return () => {
      setShowDelete(false);
      setShowAddStock(false);
    };
  }, [productsCollection]);

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
          {products?.map((item, index) => (
            <tr key={index}>
              {showAddStock && (
                <Modal centered={true} show={showAddStock}>
                  <Modal.Header
                    closeButton
                    onClick={() => setShowAddStock(false)}
                  >
                    <Modal.Title>Adding Stock</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h1>Quantity of Stock to Add</h1>
                    <input type={"text"} placeholder="Stock Quantity to Add" />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setShowAddStock(false)}
                    >
                      Close
                    </Button>
                    <Button
                      onClick={() => deleteProduct(item.id)}
                      variant="success"
                    >
                      Add Stock
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
              {showDelete && (
                <Modal centered={true} show={showDelete}>
                  <Modal.Header
                    closeButton
                    onClick={() => setShowDelete(false)}
                  >
                    <Modal.Title
                      style={{
                        fontWeight: "bold",
                        color: "red",
                        textAlign: "center",
                      }}
                    >
                      You are deleting this product! ⁉️
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    If you delete this product you won't be able to recover it!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setShowDelete(false)}
                    >
                      Close
                    </Button>
                    <Button
                      onClick={() => deleteProduct(item.id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}

              <th scope="row" className="d-flex justify-content-evenly align-items-center">
              <div
                  className="border border-0 rounded-5 "
                  style={{
                    height: "4rem",
                    width: "4rem",
                  }}
                >
                  <img
                    src={item?.productPhoto}
                    className="border border-0 rounded-5"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </th>
              <td className="">{item?.productName}</td>
              <td className="">$ {item?.productPrice}</td>
              <td className="">{item?.id}</td>
              <td className="">{item?.stock}</td>
              <td className="">
                <Link to={`/Editproduct/${item?.id}`}>
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
                </Link>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const StockReport = () => {
  return (
    <div className="scollable" style={{ height: "40vh", overflow: "scroll" }}>
      <StockTable />
    </div>
  );
};

export const ItemsCrud = () => {
  return (
    <div className="scollable" style={{ height: "95vh", overflow: "scroll" }}>
      <ItemsTable />
    </div>
  );
};

export const HistoryTable = () => {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    const salesHandler = async () => {
      const sales = await getSalesHistory();
      setSales(sales);
    };
    salesHandler();
  }, []);

  return (
    <table className="table table-borderless table-hover">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        {sales?.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row" className="d-flex justify-content-center">
                <div
                  className="border border-0 rounded-5 "
                  style={{
                    height: "4rem",
                    width: "4rem",
                  }}
                >
                  <img
                    src={item?.productPhoto}
                    className="border border-0 rounded-5"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt="product"
                  />
                </div>
              </th>
              <td className="pt-4">
                {item?.createdOn &&
                  new Date(item.createdOn).toLocaleDateString("en-GB", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })}
              </td>
              <td className="pt-4">$ {item?.productName}</td>
              <td className="pt-4">{item?.productPrice}</td>
              <td className="pt-4">{item?.productQuantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const HistorySalesAre = () => {
  return (
    <div className="scollable" style={{ height: "95vh", overflow: "scroll" }}>
      <HistoryTable />
    </div>
  );
};
