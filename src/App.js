import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route


import Home from './components/Home';
import PieChart from './components/PieChart';

const App = () => {
  return (
    <Router>
      <Routes> {/* Wrap Routes around Route components */}
      <Route exact path="/" element={<Home />} />
        <Route path="/pie-chart" element={<PieChart />} />
      </Routes>
    </Router>
  );
};

export default App;


