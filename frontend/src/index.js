import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landingpage/home/HomePage';
import Signup from './landingpage/signup/Signup'
import AboutPage from './landingpage/about/AboutPage'
import ProductsPage from './landingpage/products/ProductsPage'
import PricingPage from './landingpage/pricing/PricingPage'
import Supportpage from './landingpage/support/Supportpage'
import Navbar from './landingpage/home/Navbar';
import Footer from './landingpage/Footer';
import NotFound from './landingpage/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/product" element={<ProductsPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<Supportpage/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

