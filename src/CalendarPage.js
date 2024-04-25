
import * as React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Text,Input } from '@chakra-ui/react'

import './App.css';
import 'react-calendar/dist/Calendar.css';


function CalendarPage() {
  // localStorage.clear();
  const [value, onChange] = useState(new Date());
  // localStorage.setItem('reservationData', JSON.stringify(reservationData));
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
    const day = String(date.getDate()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
    return `${year}/${month}/${day}`;
  }

  const dateString = value;
  const formattedDate = formatDate(dateString);
  // const savedData = localStorage.getItem('reservationData');
  localStorage.setItem('date', formattedDate);

  console.log('au click : '+value);


  return (
    <div className="CalendarPage">
        <Text>Choisir une date</Text>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarPage;