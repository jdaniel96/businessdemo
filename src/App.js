import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homePage"
import ProductPage from "./views/productPage";
import PaymentPage from "./views/paymentPage";
import { db } from "./config/db";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { registerUser } from "./services/createUsers.service";
import { login } from "./services/loginUsers.service";
import { loginGoogle } from "./services/loginGoogle.service";
import { collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { logOut } from "./services/logoutUsers.service";
import { app } from "./libs/firebase";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getSpecificProduct,
} from "./controllers/products.controller";
import Dashboard from "./views/dashboard";

function App() {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(user, "user");
      const uid = user.uid;
    } else {
      // something
    }
  });
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/dasboard" element={<Dashboard/>}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  )

  
}

export default App;
