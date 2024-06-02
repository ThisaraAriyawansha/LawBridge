import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <div className="hero-section">
                <div className="background-image">
                    <div className="content">
                        <h1 className="welcome-text">Welcome to LawBridge</h1>
                        <p>Your trusted partner in legal management.</p>
                        <button className="cta-button">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="what-we-do-section">
                <div className="container">
                    <h2>What We Do</h2>
                    <p>We provide comprehensive solutions for legal case management, client communication, and more.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
