import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarView.css';
import Navbar from './Navbar';
import Footer from './Footer';

const CalendarView = () => {
    const [appointments, setAppointments] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/appointments');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateString = date.toISOString().split('T')[0];
            const appointmentDates = appointments.map(appointment => {
                const appointmentDate = new Date(appointment.appointment_date);
                return appointmentDate.toISOString().split('T')[0];
            });
            if (appointmentDates.includes(dateString)) {
                return 'booked';
            }
        }
        return '';
    };

    return (
        <div>
            <Navbar />
        <div className="calendar-container">
            
            <div className="calendar-wrapper">
                <h2 className="calendar-heading">Appointment Calendar</h2>
                <Calendar
                    onChange={setDate}
                    value={date}
                    tileClassName={tileClassName}
                    className="custom-calendar"
                />
                <div className="appointment-details">
                    <h3 className="appointment-heading">Appointments on {date.toDateString()}</h3>
                    <ul className="appointment-list">
                        {appointments
                            .filter(appointment => {
                                const appointmentDate = new Date(appointment.appointment_date);
                                return appointmentDate.toDateString() === date.toDateString();
                            })
                            .map((appointment, index) => (
                                <li key={index} className="appointment-item">
                                    {appointment.client_name} at {new Date(appointment.appointment_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            
        </div>
        <Footer />
        </div>
    );
};

export default CalendarView;
