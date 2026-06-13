import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CrystalMoonlightVilla from './pages/CrystalMoonlightVilla';
import CursorTracker from './components/CursorTracker';
import './App.css';

function App() {
  return (
    <Router>
      <CursorTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crystal-moonlight-villa" element={<CrystalMoonlightVilla />} />
      </Routes>
    </Router>
  );
}

export default App;
