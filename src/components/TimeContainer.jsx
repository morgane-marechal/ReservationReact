
import * as React from 'react';
import { useState } from 'react';
import { Text,Input, Button } from '@chakra-ui/react'

import '.././App.css';
import 'react-calendar/dist/Calendar.css';


function TimeContainer() {

//   const [value, onChange] = useState();
//   console.log('au click : '+value);
  function addTime(value){
    localStorage.setItem('time', value);
    console.log('time :'+value);
  }


  return (
<div className="timeContainer">
    {/* <Text color='white' fontSize='4xl'>Choisir une heure</Text> */}
<div className = "lunchTime">
    <Text color='white'>Réserver pour l'heure du déjeuner</Text>
    <Button value="12:00" onClick={() => addTime("12:00")} variant='ghost'>
        12:00
    </Button>
    <Button value="12:30" onClick={() => addTime("12:30")} variant='ghost'>
        12:30
    </Button>
    <Button value="13:00" onClick={() => addTime("13:00")}  variant='ghost'>
        13:00
    </Button>
</div>
<div className = "eveningTime">
    <Text color='white'>Réserver en soirée</Text>
    <Button value="19:00" onClick={() => addTime("19:00")}  variant='ghost'>
        19:00
    </Button>
    <Button value="19:30" onClick={() => addTime("19:30")} variant='ghost'>
        19:30
    </Button>
    <Button value="20:00" onClick={() => addTime("20:00")}  variant='ghost'>
        20:00
    </Button>
    <Button value="20:30" onClick={() => addTime("20:30")} variant='ghost'>
        20:30
    </Button>
</div>


    </div>
  );
}

export default TimeContainer;