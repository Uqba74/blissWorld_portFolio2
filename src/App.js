import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import "./Component/Header.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import "./Component/Footer.css";
import Footer from "./Component/Footer";
import ShopAll from "./Component/ShopAll";
import ProductDetails from "./Component/ProductDetails";
import Bestseller from "./Component/Bestseller";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/shopall" exact element={<ShopAll />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/products/:id" exact element={<ProductDetails />} />
          <Route path="/bestSeller" exact element={<Bestseller />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
