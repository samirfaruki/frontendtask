import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/Products/Products";
import Home from "./layouts/home/Home";
import Aboutus from "./layouts/Aboutus/About-us";
import ContactUs from "./layouts/ContactUs/Contact-us";
import "./assets/styles/styles.css";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="" element={<Home />}>
            <Route exact path="/product" element={<ProductList />} />
            <Route exact path="/products/:id" element={<ProductDetails />} />
            <Route exact path="/about-us" element={<Aboutus />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
