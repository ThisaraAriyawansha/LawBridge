// ClientCommunication.js
import React from 'react';
import { Link, Route,BrowserRouter as Router } from 'react-router-dom';
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
                <h3>View Appointment</h3>
                <p>Check the details of your upcoming and past appointments quickly and easily.</p>
                <Link to="/calendarview">
                    <button className="button">View Appointment</button>
                </Link>
            </div>
        </div>
    );
};

export default ClientCommunication;
