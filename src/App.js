
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import Slider from './Components/Slider';
import Footer from './Components/Footer';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home.js';
import Events from './Pages/Events.js';
import AboutUs from './Pages/AboutUs.js';
import ContactUs from './Pages/ContactUs.js';
import Register from './Pages/Register.js';
import Login from './Pages/Login.js';


function App() {
  return ( 
  <div className="App">
    <Navigation/>
    <div className='top-fix'>

      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
    
      </BrowserRouter>
      </div>
   
      
     
      
    </div>
  );
}

export default App;
