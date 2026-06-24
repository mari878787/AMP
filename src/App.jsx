import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CrystalMoonlightVilla from './pages/CrystalMoonlightVilla';
import AboutUs from './pages/AboutUs';
import CursorTracker from './components/CursorTracker';
import './App.css';

function App() {
  return (
    <Router>
      <CursorTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crystal-moonlight-villa" element={<CrystalMoonlightVilla />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
