
import * as React from 'react';
import { useState } from 'react';
import { Text,Input, Button } from '@chakra-ui/react'

import '.././App.css';
import 'react-calendar/dist/Calendar.css';


function TimeContainer() {
const [time, setTime] = useState("");

  function addTime(value){
    localStorage.setItem('time', value);
    console.log('time :'+value);
    setTime(value)
  }

  const lunchTime = ['11:30','12:00','12:30','13:00','13:30'];
  const dinerTime =['19:30','20:00','20:30','21:00'];


  return (
<div className="timeContainer">
<div className = "lunchTime">
    <Text color='white'>Réserver pour l'heure du déjeuner</Text>
    {lunchTime.map((oneTime,index) => (
            <Button  value = {oneTime} 
            className= {
                !!localStorage.getItem('time') && localStorage.getItem('time') === oneTime.toString() ? "buttonSelected" : ""
              }
              onClick={() => addTime(oneTime)} variant='ghost'>
                {oneTime}
            </Button>
        ))}

    {/* <Button value="12:00" onClick={() => addTime("12:00")} variant='ghost'
                className= {
                    !!localStorage.getItem('time') && localStorage.getItem('time')==="12:00" ? "buttonSelected" : ""
                  }>
        12:00
    </Button>
    <Button value="12:30" onClick={() => addTime("12:30")} variant='ghost'>
        12:30
    </Button>
    <Button value="13:00" onClick={() => addTime("13:00")}  variant='ghost'>
        13:00
    </Button> */}
</div>
<div className = "eveningTime">
<Text color='white'>Réserver pour l'heure du dîner</Text>

{dinerTime.map((oneTime,index) => (
            <Button  value = {oneTime} 
            className= {
                !!localStorage.getItem('time') && localStorage.getItem('time') === oneTime.toString() ? "buttonSelected" : ""
              }
              onClick={() => addTime(oneTime)} variant='ghost'>
                {oneTime}
            </Button>
        ))}
    {/* <Text color='white'>Réserver en soirée</Text>
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
    </Button> */}
</div>


    </div>
  );
}

export default TimeContainer;
