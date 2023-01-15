import { db } from "../config/db";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore/lite";

/**
 *
 * @param {{productName:string, productPrice:number, productQuantity:number, productPhoto:string}} data
 * @returns created sale
 */

export const registerSale = async (data) => {
  const salesCollection = collection(db, "sales");

  try {
    const res = await addDoc(salesCollection, {
      ...data,
      createdOn: Date.now(),
    });
  } catch (err) {
    alert("❌ something went wrong ❌");
  }
};

/**
 *
 * @returns a promise with an array of objects containing all the sales
 */
export const getSalesHistory = async () => {
  const salesCollection = collection(db, "sales");
  const data = await getDocs(salesCollection);
  const sales = await data?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  if (sales) return sales;
};

export const getTotalSalesEarnings = async () => {
  const sales = await getSalesHistory();

  try {
    const salesTotal = await sales.map(
      (sale) => sale.productPrice * sale.productQuantity
    );
    const totalEarnigs = await salesTotal.reduce((acc, sale) => acc + sale);
    return totalEarnigs;
  } catch (err) {
    alert("something went wrong ❌", err);
  }
};

/**
 *
 * @param {string} id id of the sale to delete
 */
export const DeleteSale = async (id) => {
  const sale = doc(db, "sales", id);
  try {
    const res = await deleteDoc(sale);
    if (res) alert("sale deleted ✅");
  } catch (err) {
    alert("something went wrong ❌", err);
  }
};

/**
 *
 * @param {string} id of the sale
 * @returns the sale who matches the id
 */
export const getSpecificSale = async (id) => {
  try {
    const saleRef = doc(db, "sales", id);
    const sale = (await getDoc(saleRef)).data();
    return sale;
  } catch (err) {
    alert("something went wrong ❌", err);
  }
};
