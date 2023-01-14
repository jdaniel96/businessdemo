import { db } from "../config/db";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore/lite";

/**
 * Takes an object with:
 * @param {{productName:string, productPhoto:string, productDescription:string, productPrice:number}} data
 * the data has an object containing:
 * @param {string} productName name of the product
 * @param {string} productPhoto the url of the photo
 * @param {number} productPrice the price of the product
 * @param {string} productDescription description of product
 *
 * @returns reference of the document created
 * @throws  error code and error message
 */

export const addProduct = async (
  data = {
    productName: "test name",
    productPhoto: "test photo",
    productPrice: 1,
    productDescription: "test description",
  }
) => {
  const productCollection = collection(db, "products");
  const res = await addDoc(productCollection, data);
  alert("document added");
};

export const getSpecificProduct = async (id) => {
  const productRef = doc(db, "products", id);
  const product = (await getDoc(productRef)).data();
  return product;
};

/**
 * Takes an object with:
 * the data has an object containing:
 * @param {string} productId id of the product to remove from database
 */

export const deleteProduct = async (id) => {
  const product = doc(db, "products", id);
  const res = await deleteDoc(product);
  alert("producto eliminado");
};

/**
 * Takes an object with:
 * the data has an object containing:
 * @param {string} productId id of the product
 * @param {object} product object with the new field to update in the database
 */

export const updateProduct = async (
  id,
  data = { productPhoto: "I changed it" }
) => {
  const updatedDoc = doc(db, "products", id);
  const res = await updateDoc(updatedDoc, data);
  alert("Producto Actualizado");
};