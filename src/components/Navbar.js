// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { isLoggedIn, handleLogout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li className="navbar-center-item">
                        <i className="fas fa-balance-scale navbar-icon"></i>
                    </li>
                    <li><Link to="/addcase">Add Case</Link></li>
                    <li><Link to="/pie-chart">Summary</Link></li>
                    
                                        {isLoggedIn ? (
                        <>
                            <li><button onClick={handleLogout} className="navbar-button">Logout</button></li>
                            <li className="status">Logged In</li>
                        </>
                    ) : (
                        <li><Link to="/login" className="status">Login</Link></li>
                    )}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
