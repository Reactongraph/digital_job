import React, { useState } from "react";
import "../Header/style.scss";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Product from "../../pages/Product";
import Contact from "../../pages/Contact";
import { checkoutIcn, searchIcn, userIcn } from "../../image.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="wrap_header">
          <div className="wrap_header_col mgbotm">
            <Link className="logo" to="/">
              Logo
            </Link>
            <Router>
              <ul className="menus">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
            <button type="button" className="toggle_btn">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
          <div className="wrap_header_col">
            <div className="search_row">
              <input type="search" name="search" />
              <button type="button">
                <img src={searchIcn} alt="search icon" />
              </button>
            </div>

            <div className="profile_row">
              <span>
                <img src={userIcn} alt="User Icon" />
              </span>
              <span className="checkout_icn">
                <img src={checkoutIcn} alt="Checkout icn" />
                <span className="checkout_count">2</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
