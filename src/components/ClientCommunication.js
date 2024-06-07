// ClientCommunication.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './ClientCommunication.css'; 

const ClientCommunication = () => {
    return (
        <div className="service-section">
            <h2>Client Communication</h2>
            <div className="feature">
                <h3>Secure Messaging</h3>
                <p>Send and receive secure messages with your clients.</p>
                <Link to="/sendMessage">
                    <button className="button">Start Messaging</button>
                </Link>
            </div>
            <div className="feature">
                <h3>Appointment Scheduling</h3>
                <p>Schedule appointments and set reminders for your clients.</p>
                <Link to="/appointment-scheduling">
                    <button className="button">Schedule Appointment</button>
                </Link>
            </div>
            <div className="feature">
                <h3>Client Portal</h3>
                <p>Clients can log in to view updates and track their case status.</p>
                <Link to="/client-portal">
                    <button className="button">Visit Client Portal</button>
                </Link>
            </div>
        </div>
    );
};

export default ClientCommunication;
