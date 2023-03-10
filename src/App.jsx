import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
function App() {
  return (
    <Router>
    <div className="pt-14">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Admin />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
