import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './ViewCases.css';

const ViewCases = () => {
  const [caseTypes, setCaseTypes] = useState([]);

  useEffect(() => {
    const fetchCaseTypes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cases');
        console.log('Fetched data:', response.data); // Add this line for debugging
        // Convert date strings to readable format
        const formattedData = response.data.map(item => ({
          ...item,
          date: new Date(item.date).toLocaleDateString(),
        }));
        setCaseTypes(formattedData);
      } catch (error) {
        console.error('Error fetching case types:', error);
      }
    };
  
    fetchCaseTypes();
  }, []);
  

  return (
    <div>
      <br />
      <Navbar /><br /><br /><br />
      <div className="case-list-container">
        <h1>Case List</h1>
        <table className="case-table">
          <thead>
            <tr>
              <th>Case Type</th>
              <th>Description</th>
              <th>Province</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {caseTypes.map((caseItem) => (
              <tr key={caseItem.id}>
                <td>{caseItem.caseType}</td>
                <td>{caseItem.description}</td>
                <td>{caseItem.province}</td>
                <td>{caseItem.date}</td> {/* Display formatted date */}
              </tr>
            ))}
          </tbody>
        </table>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
};

export default ViewCases;
