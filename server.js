const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'legal_case_management',
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL database connected');
});

// API endpoint to fetch pie chart data
app.get('/api/piechartdata', (req, res) => {
  const sql = 'SELECT * FROM case_types';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Fetched data from database:', result); // Log the fetched data
    res.json(result); // Send the result as JSON
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
