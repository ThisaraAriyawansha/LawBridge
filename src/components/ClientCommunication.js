import React from 'react';
import './ClientCommunication.css';

const ClientCommunication = () => {
    return (
        <div className="service-section">
            <h2>Client Communication</h2>
            <div className="feature">
                <h3>Secure Messaging</h3>
                <p>Send and receive secure messages with your clients.</p>
                <button className="cta-button">Start Messaging</button>
            </div>
            <div className="feature">
                <h3>Appointment Scheduling</h3>
                <p>Schedule appointments and set reminders for your clients.</p>
                <button className="cta-button">Schedule Appointment</button>
            </div>
            <div className="feature">
                <h3>Client Portal</h3>
                <p>Clients can log in to view updates and track their case status.</p>
                <button className="cta-button">Visit Client Portal</button>
            </div>
        </div>
    );
};

export default ClientCommunication;
