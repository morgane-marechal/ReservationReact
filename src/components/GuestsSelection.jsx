
import * as React from 'react';
import { useState } from 'react';
import { Text,Input, Button } from '@chakra-ui/react'

import '.././App.css';
import 'react-calendar/dist/Calendar.css';


function GuestsSelection() {

  const [value, onChange] = useState();
//   console.log('au click : '+value);
  function addGuest(value){
    localStorage.setItem('guestNumber', value);
    console.log('nombre invités :'+value);
  }
  const guests = [1,2,3,4,5,6,7,8,9,10,11, '12+']
return (
    <div className="timeContainer">
        <Text color='white'>Nombre de personnes</Text>
        <div className="gestsNumber">
            {guests.map((oneGuestNumber,index) => (
            <Button  value = {oneGuestNumber}  onClick={() => addGuest(oneGuestNumber)}  bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, teal.300)',
            ]} variant='ghost'>
                {oneGuestNumber}
            </Button>
        ))}
        </div>

    </div>
);

}

export default GuestsSelection;
