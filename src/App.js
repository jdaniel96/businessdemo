import logo from "./logo.svg";
import "./App.css";
import { app } from "./libs/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homePage"
import ProductPage from "./views/productPage";
import PaymentPage from "./views/paymentPage";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage/>} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  )
}

export default App;
