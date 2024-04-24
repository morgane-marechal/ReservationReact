
import * as React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Text,Input } from '@chakra-ui/react'

import './App.css';
import 'react-calendar/dist/Calendar.css';


function CalendarPage() {

  const [value, onChange] = useState(new Date());
  console.log('au click : '+value);

  return (
    <div className="CalendarPage">
        <Text>Choisir une date</Text>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarPage;