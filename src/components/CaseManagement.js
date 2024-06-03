import React from 'react';
import { Link } from 'react-router-dom';

const CaseManagement = () => {
    // Function to handle button click and navigate to the specified route
    const handleNavigation = (route) => {
        // Perform any necessary actions before navigation
        console.log(`Navigating to ${route}`);
    };

    return (
        <div className="service-section">
            <h2>Case Management</h2>
            <div className="feature">
                <h3>Organize Cases</h3>
                <p>Efficiently organize and manage case files.</p>
                <Link to="/view-cases" className="button" onClick={() => handleNavigation('/view-cases')}>View Cases</Link>
            </div>
            <div className="feature">
                <h3>Task Management</h3>
                <p>Assign tasks and track progress for each case.</p>
                <Link to="/manage-tasks" className="button" onClick={() => handleNavigation('/manage-tasks')}>Manage Tasks</Link>
            </div>
            <div className="feature">
                <h3>Reports</h3>
                <p>Generate reports and insights for better decision-making.</p>
                <Link to="/view-reports" className="button" onClick={() => handleNavigation('/view-reports')}>View Reports</Link>
            </div>
        </div>
    );
};

export default CaseManagement;
