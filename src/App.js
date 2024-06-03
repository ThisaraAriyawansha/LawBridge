import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route


import Home from './components/Home';
import PieChart from './components/PieChart';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Login from './components/Login';
import Register from './components/Register';



const App = () => {
  const handleLogin = (userData) => {
    console.log('Logging in with:', userData);
    // Add your login logic here
};

const handleRegister = (userData) => {
    console.log('Registering with:', userData);
    // Add your register logic here
};
  return (
    <Router>
      <Routes> 
      <Route exact path="/" element={<Home />} />
        <Route path="/pie-chart" element={<PieChart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </Router>
  );
};

export default App;


