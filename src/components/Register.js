import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this is imported
import Navbar from './Navbar';
import Footer from './Footer';
import './register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use the hook here

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            alert('Registration successful!');
            navigate('/login'); // Navigate to login page after successful registration
        } else {
            alert('Registration failed!');
        }
    };

    return (
        <div>
            <Navbar /><br /><br /><br /><br /><br />
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Register</button>
                </form>
            </div><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </div>
    );
};

export default Register;
