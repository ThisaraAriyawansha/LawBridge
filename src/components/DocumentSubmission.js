// DocumentSubmission.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
;

const DocumentSubmission = () => {
    return (
        <div className="service-section">
            <h2>Document Submission</h2>
            <div className="feature">
                <h3>Upload Documents</h3>
                <p>Easily upload and manage documents related to cases.</p>
                <Link to="/upload-documents">
                    <button className="button">Upload Documents</button>
                </Link>
            </div>
            <div className="feature">
                <h3>Document Tracking</h3>
                <p>Track the status and history of submitted documents.</p>
                <Link to="/document-tracking">
                    <button className="button">Track Documents</button>
                </Link>
            </div>
            <div className="feature">
                <h3>Collaboration</h3>
                <p>Collaborate with team members on document workflows.</p>
                <Link to="/collaboration">
                    <button className="button">Collaborate</button>
                </Link>
            </div>
        </div>
    );
};

export default DocumentSubmission;
