const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

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

// API endpoint to handle user registration
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error inserting user into database:', err);
      return res.status(500).json({ message: 'Registration failed' });
    }
    res.status(200).json({ message: 'User registered successfully!' });
  });
});

// API endpoint to handle login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
          res.json({ success: true, message: 'Login successful!' });
      } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
  });
});


app.post('/addcase', (req, res) => {
  const { caseType, description, province, date } = req.body;

  // Insert the new case into the cases table
  const insertCaseQuery = 'INSERT INTO cases (caseType, description, province, date) VALUES (?, ?, ?, ?)';
  db.query(insertCaseQuery, [caseType, description, province, date], (err, result) => {
      if (err) {
          console.error('Error inserting case:', err);
          res.status(500).send('Error inserting case');
          return;
      }

      // Update the case_types table to increment the case count
      const updateCaseTypeQuery = 'UPDATE case_types SET value = value + 1 WHERE label = ?';
      db.query(updateCaseTypeQuery, [caseType], (err, result) => {
          if (err) {
              console.error('Error updating case type:', err);
              res.status(500).send('Error updating case type');
              return;
          }

          res.send('Case added successfully!');
      });
  });
});


// API endpoint to fetch cases
app.get('/api/cases', (req, res) => {
  const sql = 'SELECT * FROM cases'; // Updated query to fetch data from cases table
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching cases:', err);
      res.status(500).send('Error fetching cases');
      return;
    }
    console.log('Fetched cases:', results); // Add this line for debugging
    res.json(results);
  });
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
