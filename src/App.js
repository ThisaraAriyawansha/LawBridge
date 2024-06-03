// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import PieChart from './components/PieChart';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Login from './components/Login';
import Register from './components/Register';
import AddCase from './components/AddCase';


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
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pie-chart" element={<PieChart />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/addcase" element={<AddCase />} />
                <Route path="/login" element={<Login handleLogin={handleLogin} />} />
                <Route path="/register" element={<Register handleRegister={handleRegister} />} />
            </Routes>
        </div>
    );
};

export default App;
