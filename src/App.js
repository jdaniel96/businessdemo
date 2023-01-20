import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homePage";
import ProductPage from "./views/productPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "./libs/firebase";
import Dashboard from "./views/dashboard";
import EditProduct from "./views/editProduct";
import { getTotalSalesEarnings } from "./controllers/sales.controller";
function App() {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // something
    } else {
      // something
    }
  });

  useEffect(() => {
    getTotalSalesEarnings();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/Editproduct/:id" element={<EditProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
        {/* //TODO add a fallback component to handle unmatched routes with a button to go back to home */}
        {/* //TODO Add Carousel component to main page to display to user the top 5 most sold products */}
        {/*Add a functiona search bar to main page to search for products based of price or name or category */}
        {/* add a component to query sales by date or quantity */}
      </Routes>
    </>
  );
}

export default App;
