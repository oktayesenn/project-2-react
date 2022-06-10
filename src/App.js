import './App.css';
import axios from 'axios';
import Nasa from './components/Nasa';
import { Route, Routes, Link } from "react-router-dom"
import Contact from './components/Contact';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Home from './components/Home';
import Crypto from './components/Crypto';
import Mars from './components/Mars';
import 'aos/dist/aos.css';
import AOS from 'aos';


const Nasaurl = 'https://images-api.nasa.gov/search?q=mars';



function App() {
  
  const [data, setData] = useState([]);

  React.useEffect( ()  => {
    axios.get("https://images-api.nasa.gov/search?q=mars")
    .then(async res => {
      const dataRes = await res.data.collection.items;
      setData(dataRes);
       
    })

  },[])

  
  return (
    <div className="App">
      <h1>Oktay's Project-2</h1>
      <div data-aos="fade-right" data-aos-duration="3000">
      <nav>
        <Link style={{margin:'0rem 2rem'}} to="/" className='home2 nav_link'>Home</Link>
        <Link  style={{margin:'0rem 2rem'}} to="/crypto" className='crypto'>Crypto</Link>
        <Link  style={{margin:'0rem 2rem'}} to="/nasa" className='about2'>Nasa</Link>
        <Link  style={{margin:'0rem 2rem'}} to ="/mars" className='mars'>Mars</Link>
        <Link  style={{margin:'0rem 2rem'}} to="/contact" className='contact2'>Contact</Link>
    
      </nav>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="nasa" element={<Nasa data={data} />} />
          <Route path="crypto" element={<Crypto  />} />
          <Route path="mars" element={<Mars />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
