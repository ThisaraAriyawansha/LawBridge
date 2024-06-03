// src/components/Login.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './Login.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            handleLogin();
            navigate('/');
        } else {
            alert('Login failed!');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="login-background">
                <div className="login-container">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn-primary">Login</button>
                        </form><br />
                        <div className="register-link">
                            <p>Don't have an account? <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
