import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home";
import ProductList from "../src/Pages/ProductList";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import "./App.css";
import Cart from "../src/Pages/Cart";
import Product from "../src/Pages/Product";
import Success from "../src/Pages/Success";
function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/success" element={<Success />} />
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
