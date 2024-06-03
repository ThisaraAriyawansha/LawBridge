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
                    <li><Link to="/login">Login</Link></li>
                    <li className="navbar-center-item">
                        <i className="fas fa-balance-scale navbar-icon"></i>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/about">Add Case</Link></li>
                    <li><Link to="/pie-chart">Summary</Link></li>
                    {/* Add more links as needed */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
