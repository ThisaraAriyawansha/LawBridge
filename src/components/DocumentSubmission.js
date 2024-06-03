// src/components/DocumentSubmission.js
import React from 'react';

const DocumentSubmission = () => {
    return (
        <div className="service-section">
            <h2>Document Submission</h2>
            <div className="feature">
                <h3>Upload Documents</h3>
                <p>Allow clients to securely upload documents directly to their case files for review.</p>
            </div>
            <div className="feature">
                <h3>Document Sharing</h3>
                <p>Share documents with clients, legal teams, and stakeholders with controlled access.</p>
            </div>
            <div className="feature">
                <h3>Version Control</h3>
                <p>Manage document versions and revisions to maintain accuracy and compliance.</p>
            </div>
        </div>
    );
};

export default DocumentSubmission;
