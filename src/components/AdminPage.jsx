import * as React from 'react';
import { useState, useEffect } from 'react';
import '.././App.css';
import AdminReservationsList from './AdminReservationsList';
import { color } from 'framer-motion';

const Admin = () => {
    const [resa, setResa] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/listeReservations')
        .then((res) => res.json())
        .then((data) => {
            setResa(data);
        })
        .catch((error) => {
            setError('Error fetching reservations');
            console.error('Error fetching reservations: ', error);
        });
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/deleteReservation/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if(res.ok) {
                    setResa(resa.filter(reservation => reservation.id !== id));
                }else{
                    setError('Failed to delete reservation');
                }
            })
            .catch((error) => {
                setError('Failed to delete reservation');
                console.error('Error deleting reservation');
            });
    };

    const handleCancel = (id) => {

    };

    return (
        <div>
            <h1 style={{ color: 'white' }}>Hello, Admin 👋 </h1>
            {error && <p style={{ color: 'red' }}>{error}</p> }
            <AdminReservationsList 
            reservations={resa} 
            onDelete={handleDelete}
            onCancel={handleCancel} />

        </div>
    );
};



export default Admin;


