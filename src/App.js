import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductDetailPage from "./ProductDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
