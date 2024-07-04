const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

client.connect(err => {
  if (err) throw err;
  console.log("MongoDB connected");

  const db = client.db('legal_case_management');
  const usersCollection = db.collection('users');
  const casesCollection = db.collection('cases');
  const caseTypesCollection = db.collection('case_types');
  const messagesCollection = db.collection('messages');
  const appointmentsCollection = db.collection('appointments');

  // User registration
  app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    try {
      await usersCollection.insertOne({ username, password });
      res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ message: 'Registration failed' });
    }
  });

  // User login
  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await usersCollection.findOne({ username, password });
      if (user) {
        res.json({ success: true, message: 'Login successful!' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Login failed' });
    }
  });

  // Fetch pie chart data
  app.get('/api/piechartdata', async (req, res) => {
    try {
      const data = await caseTypesCollection.find().toArray();
      res.json(data);
    } catch (error) {
      console.error('Error fetching pie chart data:', error);
      res.status(500).json({ message: 'Error fetching pie chart data' });
    }
  });

  // Fetch cases
  app.get('/api/cases', async (req, res) => {
    try {
      const cases = await casesCollection.find().toArray();
      res.json(cases);
    } catch (error) {
      console.error('Error fetching cases:', error);
      res.status(500).json({ message: 'Error fetching cases' });
    }
  });

  // Add a new case
  app.post('/api/addcase', async (req, res) => {
    const { caseType, description, province, date } = req.body;
    try {
      await casesCollection.insertOne({ caseType, description, province, date });

      await caseTypesCollection.updateOne(
        { label: caseType },
        { $inc: { value: 1 } }
      );

      res.status(200).json({ message: 'Case added successfully!' });
    } catch (error) {
      console.error('Error adding case:', error);
      res.status(500).json({ message: 'Error adding case' });
    }
  });

  // Send a message
  app.post('/api/send-message', async (req, res) => {
    const { encryptedMessage } = req.body;
    try {
      await messagesCollection.insertOne({ message: encryptedMessage });
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ message: 'Error sending message' });
    }
  });

  // Receive the latest message
  app.get('/api/receive-message', async (req, res) => {
    try {
      const latestMessage = await messagesCollection.find().sort({ _id: -1 }).limit(1).toArray();
      if (latestMessage.length > 0) {
        res.json({ encryptedMessage: latestMessage[0].message });
      } else {
        res.status(404).json({ message: 'No messages found' });
      }
    } catch (error) {
      console.error('Error receiving message:', error);
      res.status(500).json({ message: 'Error receiving message' });
    }
  });

  // Schedule an appointment
  app.post('/api/schedule-appointment', async (req, res) => {
    const { clientName, appointmentDate } = req.body;
    try {
      await appointmentsCollection.insertOne({ clientName, appointmentDate });
      res.status(200).json({ message: 'Appointment scheduled successfully!' });
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      res.status(500).json({ message: 'Error scheduling appointment' });
    }
  });

  // Fetch appointments for a specific date
  app.get('/api/appointments', async (req, res) => {
    const { date } = req.query;
    try {
      const appointments = await appointmentsCollection.find({ appointmentDate: new Date(date) }).toArray();
      res.json(appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      res.status(500).json({ message: 'Error fetching appointments' });
    }
  });

  // Start the server
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
