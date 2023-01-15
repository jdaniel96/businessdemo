import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homePage";
import ProductPage from "./views/productPage";
import PaymentPage from "./views/paymentPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "./libs/firebase";
import Dashboard from "./views/dashboard";
import { analytics } from "./libs/firebase";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  );
}

export default App;
