// CourtDateTracking.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation


const CourtDateTracking = () => {
    return (
        <div className="service-section">
            <h2>Court Date Tracking</h2>
            <div className="feature">
                <h3>Calendar Integration</h3>
                <p>Sync court dates with your calendar for better planning.</p>
                <Link to="/calendar-integration">
                    <button className="cta-button">Sync Calendar</button>
                </Link>
            </div>
            <div className="feature">
                <h3>Reminder Alerts</h3>
                <p>Receive reminders and alerts for upcoming court dates.</p>
                <Link to="/reminder-alerts">
                    <button className="cta-button">Set Reminders</button>
                </Link>
            </div>
            <div className="feature">
                <h3>Case Status Updates</h3>
                <p>Stay updated on case statuses and court proceedings.</p>
                <Link to="/case-status">
                    <button className="cta-button">View Status</button>
                </Link>
            </div>
        </div>
    );
};

export default CourtDateTracking;
