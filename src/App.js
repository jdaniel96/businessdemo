import { app } from "./libs/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function App() {
  const auth = getAuth(app);
  const [data, setData] = useState({
    productName: "test with photo",
    productPhoto: null,
    productPrice: 1,
    productDescription: "test description with photo",
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // something
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
        <input
          onChange={(value) =>
            setData({ ...data, productPhoto: value.target.files[0] })
          }
          type={"file"}
          accept="image/png, image/jpeg"
        />
      </header>
    </div>
  );
}

export default App;
