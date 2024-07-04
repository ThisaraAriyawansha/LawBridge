import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faInfoCircle, faTasks, faComments, faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const sectionsRef = useRef([]);
    const icons = [faBriefcase, faInfoCircle, faTasks, faComments, faQuestionCircle, faEnvelope];
    const animations = ['slide-in', 'zoom-in', 'fade-in', 'slide-in', 'zoom-in', 'fade-in'];

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationClass = animations[sectionsRef.current.indexOf(entry.target)];
                    entry.target.classList.add('animate', animationClass);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        sectionsRef.current.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

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
            {['What We Do', 'About Us', 'Our Services', 'Testimonials', 'FAQ', 'Contact Us'].map((title, index) => (
                <div 
                    key={index} 
                    className={`section ${title.toLowerCase().replace(/\s+/g, '-')}-section section-divider`} 
                    ref={(el) => sectionsRef.current[index] = el}
                >
                    <div className="container">
                        <FontAwesomeIcon icon={icons[index]} size="3x" className="section-icon" />
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: getSectionContent(title) }} />
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    );
}

const getSectionContent = (title) => {
    switch (title) {
        case 'What We Do':
            return "At LawBridge, we provide a comprehensive suite of tools designed to streamline legal case management. Our platform facilitates efficient organization of case files, seamless client communication, and accurate tracking of court dates and document submissions. With LawBridge, legal professionals can enhance their productivity, maintain meticulous records, and deliver exceptional service to their clients. Our goal is to support legal practices in reducing caseloads and improving outcomes through advanced data analysis and actionable insights.";
        case 'About Us':
            return "LawBridge is a leading provider of legal case management software, dedicated to helping legal professionals streamline their workflows and improve client service. Our team of experts is committed to delivering innovative solutions that meet the unique needs of law firms and legal departments.";
        case 'Our Services':
            return "Case Management<br><br>Client Communication<br><br>Court Date Tracking<br><br>Document Management<br><br>Data Analysis";
        case 'Testimonials':
            return '<blockquote>"LawBridge has transformed the way we manage our cases. It\'s intuitive and easy to use, allowing us to focus more on our clients."<br/>- Jane Doe, Lawyer</blockquote><blockquote>"An indispensable tool for our firm. LawBridge makes it simple to keep track of important dates and documents."<br/>- John Smith, Legal Assistant</blockquote>';
        case 'FAQ':
            return "<ul><li><strong>How can I schedule a demo?</strong> You can schedule a demo by contacting us at info@lawbridge.com.</li><li><strong>Is there a trial period?</strong> Yes, we offer a 30-day trial period for new users.</li><li><strong>What support options are available?</strong> We provide 24/7 customer support via phone, email, and chat.</li></ul>";
        case 'Contact Us':
            return "For more information about our services or to schedule a demo, please contact us at:<br/>Email: lawbridge@gmail.com<br/>Phone: +94769414174";
        default:
            return "";
    }
}

export default Home;
