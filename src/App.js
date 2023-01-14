import "./App.css";
import { app } from "./libs/firebase";
import { db } from "./config/db";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { registerUser } from "./services/createUsers.service";
import { login } from "./services/loginUsers.service";
import { loginGoogle } from "./services/loginGoogle.service";
import { collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { logOut } from "./services/logoutUsers.service";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getSpecificProduct,
} from "./controllers/products.controller";

function App() {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]); //Puedes usar "products" para obtener la lista de productos en forma de array de objetos
  const productsCollection = collection(db, "products");
  const auth = getAuth(app);

  useEffect(() => {
    const getDbProducts = async () => {
      const data = await getDocs(productsCollection);

      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDbProducts();
    // addProduct();
    // updateProduct(products[0].id);
    // deleteProduct(products[0].id);
    getSpecificProduct(products[0]?.id);
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(user, "user");
      const uid = user.uid;
    } else {
      // something
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => registerUser()}>register</button>
        <button onClick={() => login()}>login</button>
        <button onClick={() => loginGoogle()}>login with google</button>
        <button onClick={() => logOut()}>logout</button>
      </header>
    </div>
  );
}

export default App;
