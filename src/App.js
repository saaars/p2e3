import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from "./pages/About";
import Learn from './pages/Learn.jsx'
import Adopt from './pages/Adopt';
import Donate from './pages/Donate'
import Volunteer from './pages/Volunteer'
import Thanks from './pages/Thanks'
import DogDescrip from './pages/DogDescrip'
import PropertyDetails from './pages/PropertyDetails'

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/learn" element={<Learn/>}/>
        <Route path="/adopt" element={<Adopt/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
        <Route path="/volunteer" element={<Volunteer/>}/>
        <Route path="/dogDescrip" element={<DogDescrip/>}/>
        <Route path="/property/:id" element={<PropertyDetails />}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
