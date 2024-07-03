import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <Navbar />
            <div className="about-us-container">
                <h1>About Us</h1>
                <div className="content">
                    <p>Welcome to LawBridge, your trusted partner in legal management. Our mission is to provide comprehensive solutions for legal case management, client communication, and more.</p>
                    <p>At LawBridge, we understand the complexities of legal processes and the importance of organization and efficiency. Our platform is designed to help legal professionals manage their cases, clients, and documentation with ease.</p>
                    <p>With a team of experienced professionals and a commitment to innovation, we strive to deliver the best tools and resources for the legal industry. Our goal is to empower law firms and legal departments to streamline their workflows and enhance their productivity.</p>
                    <p>Thank you for choosing LawBridge. We look forward to serving you and supporting your legal practice.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
