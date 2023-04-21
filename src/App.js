import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductList, ProductDetails } from "./components/product/Products";
import Home from "./layouts/home/Home";
import "./assets/styles/styles.css";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="" element={<Home />}>
            <Route exact path="/product" element={<ProductList />} />
            <Route exact path="/products/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
