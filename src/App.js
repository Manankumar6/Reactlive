import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './routing/About';
import Contact from './routing/Contact';
import { Route, Routes } from 'react-router-dom';

import Navbar from './routing/Navbar';
import Service from './routing/Service';
import Home from './routing/Home';
import Footer from './routing/Footer';

function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/about" element={<About  />} />
        <Route exact path="/contact" element={<Contact name='Contact' />} />
        <Route exact path="/service"  element={<Service name='Service' />}  />
       
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
