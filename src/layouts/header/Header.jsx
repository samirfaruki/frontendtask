import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="header__logo">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo-2015-present.jpg"
            alt="Logo"
          />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/product">Store</Link>{" "}
            </li>
            <li className="header__nav-item">
              <a href="/about">About Us</a>
            </li>
            <li className="header__nav-item">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="header__cart">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
            alt="Cart"
          />
          <span className="header__cart-count">0</span>
        </div>
      </header>
    </Fragment>
  );
};
