
import * as React from 'react';
import { useState } from 'react';
import { Text,Input, Button } from '@chakra-ui/react'

import './App.css';
import 'react-calendar/dist/Calendar.css';


function TimeContainer() {

  const [value, onChange] = useState(new Date());
  console.log('au click : '+value);

  return (
<div className="timeContainer">
    <Text color='white' fontSize='4xl'>Choisir une heure</Text>
<div className = "lunchTime">
    <Text color='white'>Réserver pour l'heure du déjeuner</Text>
    <Button   bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, teal.300)',
    ]} variant='ghost'>
        12:00
    </Button>
    <Button bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, teal.300)',
    ]} variant='ghost'>
        12:30
    </Button>
    <Button bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, teal.300)',
    ]} variant='ghost'>
        13:00
    </Button>
</div>
<div className = "eveningTime">
    <Text color='white'>Réserver en soirée</Text>
    <Button bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, teal.300)',
    ]} variant='ghost'>
        19:00
    </Button>
    <Button bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, teal.300)',
    ]} variant='ghost'>
        19:30
    </Button>
    <Button bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, teal.300)',
    ]} variant='ghost'>
        20:00
    </Button>
    <Button bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, teal.300)',
    ]} variant='ghost'>
        20:30
    </Button>
</div>


    </div>
  );
}

export default TimeContainer;