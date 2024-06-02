import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Navbar from './Navbar';
import Footer from './Footer';

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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  return (
    
    <div>
       <Navbar />
      <h2>Pie Chart</h2>
      {chartData.labels ? <Pie data={chartData} /> : <p>Loading...</p>}
      <Footer />

    </div>
  );
};

export default PieChart;
