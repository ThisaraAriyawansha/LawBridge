import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './AddCase.css';

const AddCase = () => {
    const [caseType, setCaseType] = useState('');
    const [description, setDescription] = useState('');
    const [province, setProvince] = useState('');
    const [date, setDate] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const caseData = { caseType, description, province, date };

        fetch('http://localhost:5000/addcase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(caseData)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            setSuccessMessage('Case added successfully!');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000); // Message will disappear after 3 seconds
        })
        .catch(error => {
            console.error('Error:', error);
            setSuccessMessage('Failed to add case.');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        });
    };

    return (
        <div><br></br>
            <Navbar />
            <div className="add-case-background">
                <div className="add-case-container">
                    <h2 className="add-case-title">Add New Case</h2>
                    <form onSubmit={handleSubmit} className="add-case-form">
                        <div className="form-group">
                            <label htmlFor="caseType">Case Type</label>
                            <select
                                id="caseType"
                                value={caseType}
                                onChange={(e) => setCaseType(e.target.value)}
                            >
                                <option value="">Select Case Type</option>
                                <option value="Civil Cases">Civil Case</option>
                                <option value="Criminal Cases">Criminal Case</option>
                                <option value="Family Law Cases">Family Law Case</option>
                                <option value="Labor Cases">Labor Case</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                placeholder="Enter case description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="province">Province</label>
                            <select
                                id="province"
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}
                            >
                                <option value="">Select Province</option>
                                <option value="Central_Province">Central Province</option>
                                <option value="Eastern_Province">Eastern Province</option>
                                <option value="Northern_Central_Province">North Central Province</option>
                                <option value="Southern_Province">Northern Province</option>
                                <option value="Northern_Province">North Western Province</option>
                                <option value="Sabaragamuwa_Province">Sabaragamuwa Province</option>
                                <option value="Northern_Province">Southern Province</option>
                                <option value="Uva_Province">Uva Province</option>
                                <option value="Western_Province">Western Province</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                id="date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn-primary">Submit</button>
                    </form>
                    {successMessage && (
                        <div className="success-message">
                            {successMessage}
                        </div>
                    )}
                    <div className="data-protection">
                        <h3>We Protect Your Data</h3>
                        <p>Don't worry, we take your data privacy seriously and ensure it's protected.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddCase;
