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
                    <p>At LawBridge, we provide a comprehensive suite of tools designed to streamline legal case management.
                         Our platform facilitates efficient organization of case files, seamless client communication,
                          and accurate tracking of court dates and document submissions. With LawBridge, legal professionals 
                          can enhance their productivity, maintain meticulous records, and deliver exceptional service to their clients.
                           Our goal is to support legal practices in reducing caseloads and improving outcomes through advanced data
                            analysis and actionable insights.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
