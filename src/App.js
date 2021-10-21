import React,{useState} from "react";
// import MainHeader from "./components/Header";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import "./components/Header/style.scss";
import Home from "./pages/Home";
import Product from "./pages/Product";
import {searchIcn } from "./image";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {

  const [activeMenu, setActiveMenu] = useState()

  return (
    <div className="App">
      <TopHeader />
      <Router>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="wrap_header_col mgbotm">
                <Link className="logo" to="/">
                  DigiLogo
                </Link>

                <ul className="menus">
                  <li>
                    <Link className={activeMenu == 'Home' ? 'active' : 'null'}
                    onClick={() => { setActiveMenu('Home') }} to="/">Home</Link>
                  </li>
                  <li>
                    <Link className={activeMenu == 'About' ? 'active' : 'null'}
                    onClick={() => { setActiveMenu('About') }} to="/about">About</Link>
                  </li>
                  <li>
                    <Link className={activeMenu == 'Product' ? 'active' : 'null'}
                    onClick={() => { setActiveMenu('Product') }} to="/product">Product</Link>
                  </li>
                  <li>
                    <Link className={activeMenu == 'Contact' ? 'active' : 'null'}
                    onClick={() => { setActiveMenu('Contact') }} to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
               
              </div>
              <div className="col-md-6 wrap_header_col">
                <div className="search_row">
                  <input type="search" placeholder="Search" name="search" />
                  <button type="button">
                    <img src={searchIcn} alt="search icon" />
                  </button>
                </div>

                <div className="profile_row">
                  <button type="button"  className="btn lnk_btn">Login</button>
                  <button type="button" className="btn lnk_btn">Sign Up</button>
                 
                </div>
              </div>
            </div>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/product">
            <Product />
          </Route>

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
