import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, Input, Button } from '@chakra-ui/react';

import '.././App.css';
import 'react-calendar/dist/Calendar.css';

function AlertDispo() {
    const [placeDispo, setPlaceDispo] = useState([]); //nombre limite de tables de 2 modulables
    const [message, setMessage] = useState(['Ce restaurant peut accueillir 100 couverts']); //nombre limite de tables de 2 modulables



    const checkBooked = async () => {
        const bookingTime = {
            date: localStorage.getItem('date').replace(/\//g, '-'),
            time: localStorage.getItem('time')
        };
        try {
            const res = await fetch(`http://localhost:3001/bookingNumber/${bookingTime.date}/${bookingTime.time}`);
            const data = await res.json();
            console.log(data);
            const customerNumb=data[0].sum_customer;
            setPlaceDispo(100-customerNumb);
            console.log(placeDispo);
            setMessage('Nombre de places restantes: '+placeDispo);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        checkBooked();
    }, []);

    return (
        <div className="cardCheckBooking">
            <Button className="cardCheckBooking__button" size='xs' onClick={checkBooked}>{message}</Button>
        </div>
    );
}

export default AlertDispo;
