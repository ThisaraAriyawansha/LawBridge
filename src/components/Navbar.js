import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import './Navbar.css'; // Import your CSS file for navbar styles
import logoImage from './images/3.jpg'; // Import the logo image

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li className="navbar-center-item">
                        <img src={logoImage} alt="Logo" className="navbar-logo" />
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/pie-chart">Summary</Link></li>
                    
                    {/* Add more links as needed */}
                   
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
