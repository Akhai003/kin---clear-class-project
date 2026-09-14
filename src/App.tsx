import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Ingredients from './pages/Ingredients';
import Standards from './pages/Standards';
import Learn from './pages/Learn';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:slug" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="standards" element={<Standards />} />
          <Route path="learn" element={<Learn />} />
          {/* Fallback for other pages */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
