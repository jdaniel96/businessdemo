import { db } from "../config/db";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  getDocs,
} from "firebase/firestore/lite";
import { uploadProductPhoto } from "../utils/uploadPhoto";
import { registerSale } from "./sales.controller";

/**
 * Takes an object with:
 * @param {{productName:string, productPhoto:string, productDescription:string, productPrice:number, stock:number}} data
 * the data has an object containing:
 * @param {string} productName name of the product
 * @param {string} productPhoto the url of the photo
 * @param {number} productPrice the price of the product
 * @param {string} productDescription description of product
 *@param {number} stock quantity off available product
 * @returns reference of the document created
 * @throws  error code and error message
 */

export const addProduct = async (data) => {
  try {
    const productCollection = collection(db, "products");
    const photoUrl = await uploadProductPhoto(data.productPhoto);
    const res = await addDoc(productCollection, {
      ...data,
      productPhoto:
        photoUrl ??
        "https://joadre.com/wp-content/uploads/2019/02/no-image.jpg",
      createdOn: Date.now(),
    });
  } catch (err) {
    console.log(err, err.message, err.code);
    alert("❌ something wrong adding a product");
  }
};

export const addStock = async (id, stockQuantity) => {
  try {
    const updatedDoc = doc(db, "products", id);
    const res = await updateDoc(updatedDoc, { stock: stockQuantity });
    if (res) {
      alert("Stock Added ✅");
    }
    return res;
  } catch (err) {
    alert("something went wrong ❌");
  }
};

export const getSpecificProduct = async (id) => {
  const productRef = doc(db, "products", id);
  const product = (await getDoc(productRef)).data();
  return product;
};

export const buyProduct = async (id, quantity) => {
  const productRef = doc(db, "products", id);
  const product = (await getDoc(productRef)).data();

  if (product.productSales === 0) {
  }
  try {
    const res = await updateProduct(id, {
      ...product,
      stock: product?.stock - quantity,
      productSales: product?.productSales + quantity,
    });

    if (res) {
      const earnings = await updateProduct(id, {
        productEarnings:
          product.productSales === 0
            ? product.productPrice * quantity
            : product.productSales * product.productPrice,
      });

      alert("Product Bought Successfully ✅");
    }
    const response = await registerSale({
      productName: product?.productName,
      productPrice: product?.productPrice,
      productPhoto: product?.productPhoto,
      productQuantity: quantity,
      productDelivered: true,
    });
  } catch (err) {
    alert("Something went wrong ❌");
    console.log("error", err);
  }
};

/**
 * Takes an object with:
 * the data has an object containing:
 * @param {string} productId id of the product to remove from database
 */

export const deleteProduct = async (id) => {
  try {
    const product = doc(db, "products", id);
    const res = await deleteDoc(product);
    alert("producto eliminado ");
  } catch (err) {
    alert("something went wrong ❌", err);
  }
};

/**
 * Takes an object with:
 * the data has an object containing:
 * @param {string} productId id of the product
 * @param {object} product object with the new field to update in the database
 */

export const updateProduct = async (id, data) => {
  try {
    const updatedDoc = doc(db, "products", id);
    const res = await updateDoc(updatedDoc, data);
    return true; //use boolean to display alerts
  } catch (err) {
    console.log("in update product", err.message, err.code, err);
  }
};

export const markProductDelivered = async () => {
  const ordersCollection = collection(db, "activeOrders");
  const data = await getDocs(ordersCollection);
};
