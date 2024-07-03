// src/components/ClientPortal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './ClientPortal.css';

const ClientPortal = () => {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCases = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cases');
                setCases(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cases:', error);
                setLoading(false);
            }
        };

        fetchCases();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="client-portal-container">
                <h2>Client Portal</h2>
                {loading ? (
                    <p>Loading cases...</p>
                ) : (
                    <div className="case-list">
                        {cases.map((caseItem) => (
                            <div key={caseItem.id} className="case-card">
                                <h3>{caseItem.caseType}</h3>
                                <p>Description: {caseItem.description}</p>
                                <p>Province: {caseItem.province}</p>
                                <p>Date: {caseItem.date}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ClientPortal;
