import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homePage";
import ProductPage from "./views/productPage";
import PaymentPage from "./views/paymentPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { app } from "./libs/firebase";
import Dashboard from "./views/dashboard";
import { analytics } from "./libs/firebase";
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

  console.log("analytics", analytics);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  );
}

export default App;
