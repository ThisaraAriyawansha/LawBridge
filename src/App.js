import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route


import Home from './components/Home';
import PieChart from './components/PieChart';
import AboutUs from './components/AboutUs';
import Services from './components/Services';


const App = () => {
  return (
    <Router>
      <Routes> 
      <Route exact path="/" element={<Home />} />
        <Route path="/pie-chart" element={<PieChart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;


