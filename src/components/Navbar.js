// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import './Navbar.css'; // Import your CSS file for navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/pie-chart">Summery</Link></li>

                    
                    {/* Add more links as needed */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
