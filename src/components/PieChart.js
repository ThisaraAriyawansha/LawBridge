import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Navbar from './Navbar';
import Footer from './Footer';
import './PieChart.css'; // Import the CSS file for styling

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
                'rgba(40, 44, 52, 0.8)', // Dark color 1
                'rgba(72, 82, 91, 0.8)', // Dark color 2
                'rgba(100, 110, 120, 0.8)', // Dark color 3
                'rgba(30, 30, 30, 0.8)', // Additional dark color
                'rgba(50, 50, 50, 0.8)', // Additional dark color
                'rgba(70, 70, 70, 0.8)', // Additional dark color
              ],
              borderColor: [
                'rgba(40, 44, 52, 1)', // Dark color 1
                'rgba(72, 82, 91, 1)', // Dark color 2
                'rgba(100, 110, 120, 1)', // Dark color 3
                'rgba(30, 30, 30, 1)', // Additional dark color
                'rgba(50, 50, 50, 1)', // Additional dark color
                'rgba(70, 70, 70, 1)', // Additional dark color
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
        <h2>Summary Of the Cases..</h2>
        {chartData.labels ? <div className="chart-wrapper"><Pie data={chartData} /></div> : <p>Loading...</p>}
      </div>
      <Footer />
    </div>
  );
};

export default PieChart;
