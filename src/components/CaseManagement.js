// CaseManagement.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation


const CaseManagement = () => {
    return (
        <div className="service-section">
            <h2>Case Management</h2>
            <div className="feature">
                <h3>Organize Cases</h3>
                <p>Efficiently organize and manage case files.</p>
                <Link to="/organize-cases">
                    <button className="cta-button">View Cases</button>
                </Link>
            </div>
            <div className="feature">
                <h3>Task Management</h3>
                <p>Assign tasks and track progress for each case.</p>
                <Link to="/task-management">
                    <button className="cta-button">Manage Tasks</button>
                </Link>
            </div>
            <div className="feature">
                <h3>Reports</h3>
                <p>Generate reports and insights for better decision-making.</p>
                <Link to="/reports">
                    <button className="cta-button">View Reports</button>
                </Link>
            </div>
        </div>
    );
};

export default CaseManagement;
