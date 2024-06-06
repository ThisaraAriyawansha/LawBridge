// src/components/AppointmentScheduling.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './AppointmentScheduling.css';

const AppointmentScheduling = () => {
    const [clientName, setClientName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const scheduleAppointment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/schedule-appointment', {
                clientName,
                appointmentDate
            });
            setConfirmationMessage(response.data.message);
        } catch (error) {
            console.error('Error scheduling appointment:', error);
            setConfirmationMessage('Error scheduling appointment');
        }
    };

    return (
        <div><br></br>
            <Navbar />
            <div className="appointment-container">
                <div className="appointment-form">
                    <h2>Schedule Appointment</h2>
                    <input 
                        type="text" 
                        value={clientName} 
                        onChange={(e) => setClientName(e.target.value)} 
                        placeholder="Client Name" 
                    />
                    <input 
                        type="datetime-local" 
                        value={appointmentDate} 
                        onChange={(e) => setAppointmentDate(e.target.value)} 
                    />
                    <button onClick={scheduleAppointment} className="animated-button">Schedule</button>
                    {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AppointmentScheduling;
