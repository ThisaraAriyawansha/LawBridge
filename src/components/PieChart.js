import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Navbar from './Navbar';
import Footer from './Footer';
import './PieChart.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

const PieChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/piechartdata')
      .then((response) => response.json())
      .then((data) => {
        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Case Types',
              data: values,
              backgroundColor: [
                'rgba(66, 133, 244, 0.8)', // Google Blue
                'rgba(219, 68, 55, 0.8)',  // Google Red
                'rgba(244, 180, 0, 0.8)',  // Google Yellow
                'rgba(15, 157, 88, 0.8)',  // Google Green
                'rgba(171, 71, 188, 0.8)', // Additional Google color
                'rgba(0, 150, 136, 0.8)',  // Additional Google color
              ],
              borderColor: [
                'rgba(66, 133, 244, 1)', 
                'rgba(219, 68, 55, 1)',  
                'rgba(244, 180, 0, 1)',  
                'rgba(15, 157, 88, 1)',  
                'rgba(171, 71, 188, 1)', 
                'rgba(0, 150, 136, 1)',  
              ],
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div className="pie-chart-page">
      <Navbar />
      <div className="chart-container">
        <h2>
          <FontAwesomeIcon icon={faChartPie} /> Summary of the Cases
        </h2>
        {chartData.labels ? <div className="chart-wrapper"><Pie data={chartData} /></div> : <p>Loading...</p>}
      </div>
      <Footer />
    </div>
  );
};

export default PieChart;
