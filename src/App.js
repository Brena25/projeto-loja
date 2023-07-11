import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./componentes/Navbar";

import ProductList from "./componentes/ProductList";
import Details from "./componentes/Details";
import Cart from "./componentes/Cart";
import Default from "./componentes/Default";
import Modal from "./componentes/Modal";




class App extends Component {
  render() {
    return (
     <React.Fragment>
      <Navbar />
        <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/default" element={<Default/>} />
        </Routes>
        <Modal/>
     </React.Fragment>

    );
  }
}

export default App;



