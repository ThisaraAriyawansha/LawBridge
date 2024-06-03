// Services.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CaseManagement from './CaseManagement';
import ClientCommunication from './ClientCommunication';
import DocumentSubmission from './DocumentSubmission';
import CourtDateTracking from './CourtDateTracking';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <Navbar />
            <div className="container">
                <h1 className="main-heading">Our Services</h1>
                <div className="services-grid">
                    <div className="service-item">
                        <CaseManagement />
                    </div>
                    <div className="service-item">
                        <ClientCommunication />
                    </div>
                    <div className="service-item">
                        <DocumentSubmission />
                    </div>
                    <div className="service-item">
                        <CourtDateTracking />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;
