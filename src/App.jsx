import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './Components/All/All';
import Sell from './Components/Sell/Sell';
import BestSellers from './Components/BestSellers/BestSellers';
import Mobiles from './Components/Mobiles/Mobiles';
import TodaysDeals from './Components/Todays/TodaysDeals';
import Primes from './Components/Primes/Primes';
import CustomerServices from './Components/Customer-Services/CustomerServices';
import NewRelease from './Components/New-Release/NewRelease';
import Electronics from './Components/Electronics/Electronics';
import Fashion from './Components/Fashion/Fashion';
import Fresh from './Components/Fresh/Fresh';
import FreshRecipeDetails from './Components/Fresh/FreshRecipeDetails';
import Footer from './Components/Footer/Footer';
import ProductDetail from './Components/Todays/ProductDetails';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/fresh" element={<Fresh />} />
        <Route path="/fresh/:id" element={<FreshRecipeDetails />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/todays-deals" element={<TodaysDeals />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/primes" element={<Primes />} />
        <Route path="/customer-services" element={<CustomerServices />} />
        <Route path="/new-releases" element={<NewRelease />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/fashion" element={<Fashion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
