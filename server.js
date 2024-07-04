const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

console.log("Connecting to MongoDB...");

client.connect(err => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process with a failure code
  } else {
    console.log("MongoDB connected successfully");

    const db = client.db('legal_case_management');
    const usersCollection = db.collection('users');
    const casesCollection = db.collection('cases');
    const caseTypesCollection = db.collection('case_types');
    const messagesCollection = db.collection('messages');
    const appointmentsCollection = db.collection('appointments');

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

    app.post('/addcase', async (req, res) => {
      const { caseType, description, province, date } = req.body;
      try {
        await casesCollection.insertOne({ caseType, description, province, date });
        await caseTypesCollection.updateOne({ label: caseType }, { $inc: { value: 1 } });
        res.send('Case added successfully!');
      } catch (error) {
        console.error('Error inserting case:', error);
        res.status(500).send('Error inserting case');
      }
    });

    app.get('/api/cases', async (req, res) => {
      try {
        const cases = await casesCollection.find().toArray();
        res.json(cases);
      } catch (error) {
        console.error('Error fetching cases:', error);
        res.status(500).send('Error fetching cases');
      }
    });

    app.post('/api/send-message', async (req, res) => {
      const { encryptedMessage } = req.body;
      try {
        await messagesCollection.insertOne({ message: encryptedMessage });
        res.json({ message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error inserting message:', error);
        res.status(500).json({ message: 'Error sending message' });
      }
    });

    app.get('/api/receive-message', async (req, res) => {
      try {
        const message = await messagesCollection.find().sort({ timestamp: -1 }).limit(1).toArray();
        if (message.length > 0) {
          res.json({ encryptedMessage: message[0].message });
        } else {
          res.status(404).json({ message: 'No messages found' });
        }
      } catch (error) {
        console.error('Error fetching message:', error);
        res.status(500).json({ message: 'Error receiving message' });
      }
    });

    app.post('/api/schedule-appointment', async (req, res) => {
      const { clientName, appointmentDate } = req.body;
      try {
        await appointmentsCollection.insertOne({ client_name: clientName, appointment_date: appointmentDate });
        res.status(200).json({ message: 'Appointment scheduled successfully' });
      } catch (error) {
        console.error('Error scheduling appointment:', error);
        res.status(500).json({ message: 'Error scheduling appointment' });
      }
    });

    app.get('/api/appointments', async (req, res) => {
      const { date } = req.query;
      try {
        const appointments = await appointmentsCollection.find({ appointment_date: new Date(date) }).toArray();
        res.json(appointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ message: 'Error fetching appointments' });
      }
    });

    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  }
});
