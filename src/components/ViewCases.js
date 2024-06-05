import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewCases = () => {
  const [caseTypes, setCaseTypes] = useState([]);

  useEffect(() => {
    const fetchCaseTypes = async () => {
      try {
        const response = await axios.get('/api/case-types');
        setCaseTypes(response.data);
      } catch (error) {
        console.error('Error fetching case types:', error);
      }
    };

    fetchCaseTypes();
  }, []);

  return (
    <div className="view-cases">
      <h2>Case Types</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>caseType</th>
            <th>Description</th>
            <th>Province</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {caseTypes.map((caseType) => (
            <tr key={caseType.id}>
              <td>{caseType.id}</td>
              <td>{caseType.casetype}</td>
              <td>{caseType.description}</td>
              <td>{caseType.province}</td>
              <td>{caseType.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCases;
