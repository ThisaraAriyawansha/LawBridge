import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faInfoCircle, faTasks, faComments, faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <div className="hero-section">
                <div className="background-image">
                    <div className="content">
                        <h1 className="welcome-text">Welcome to LawBridge</h1>
                        <p>Your trusted partner in legal management.</p>
                        <Link to="/about" className="cta-button">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="section what-we-do-section fade-in section-divider">
                <div className="container">
                    <FontAwesomeIcon icon={faBriefcase} size="3x" className="section-icon" />
                    <h2>What We Do</h2>
                    <p>At LawBridge, we provide a comprehensive suite of tools designed to streamline legal case management. Our platform facilitates efficient organization of case files, seamless client communication, and accurate tracking of court dates and document submissions. With LawBridge, legal professionals can enhance their productivity, maintain meticulous records, and deliver exceptional service to their clients. Our goal is to support legal practices in reducing caseloads and improving outcomes through advanced data analysis and actionable insights.</p>
                </div>
            </div>
            <div className="section about-us-section fade-in section-divider">
                <div className="container">
                    <FontAwesomeIcon icon={faInfoCircle} size="3x" className="section-icon" />
                    <h2>About Us</h2>
                    <p>LawBridge is a leading provider of legal case management software, dedicated to helping legal professionals streamline their workflows and improve client service. Our team of experts is committed to delivering innovative solutions that meet the unique needs of law firms and legal departments.</p>
                </div>
            </div>
            <div className="section services-section fade-in section-divider">
                <div className="container">
                    <FontAwesomeIcon icon={faTasks} size="3x" className="section-icon" />
                    <h2>Our Services</h2>
                    <ul>
                        <li>Case Management</li>
                        <li>Client Communication</li>
                        <li>Court Date Tracking</li>
                        <li>Document Management</li>
                        <li>Data Analysis</li>
                    </ul>
                </div>
            </div>
            <div className="section testimonials-section fade-in section-divider">
                <div className="container">
                    <FontAwesomeIcon icon={faComments} size="3x" className="section-icon" />
                    <h2>Testimonials</h2>
                    <blockquote>
                        "LawBridge has transformed the way we manage our cases. It's intuitive and easy to use, allowing us to focus more on our clients."
                        - Jane Doe, Lawyer
                    </blockquote>
                    <blockquote>
                        "An indispensable tool for our firm. LawBridge makes it simple to keep track of important dates and documents."
                        - John Smith, Legal Assistant
                    </blockquote>
                </div>
            </div>
            <div className="section faq-section fade-in section-divider">
                <div className="container">
                    <FontAwesomeIcon icon={faQuestionCircle} size="3x" className="section-icon" />
                    <h2>FAQ</h2>
                    <ul>
                        <li><strong>How can I schedule a demo?</strong> You can schedule a demo by contacting us at info@lawbridge.com.</li>
                        <li><strong>Is there a trial period?</strong> Yes, we offer a 30-day trial period for new users.</li>
                        <li><strong>What support options are available?</strong> We provide 24/7 customer support via phone, email, and chat.</li>
                    </ul>
                </div>
            </div>
            <div className="section contact-us-section fade-in section-divider">
                <div className="container">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" className="section-icon" />
                    <h2>Contact Us</h2>
                    <p>For more information about our services or to schedule a demo, please contact us at:</p>
                    <p>Email: lawbridge@gmail.com</p>
                    <p>Phone: +94769414174</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
