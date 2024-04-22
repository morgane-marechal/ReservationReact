// import logo from './logo.svg';
import './App.css';
import ListeReservations from './fetchReservations.js';
import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import CalendarPage from './CalendarPage.js';
import { Progress } from '@chakra-ui/react';
import MenuContainer from './MenuComp.js';
import background from "./image/background_cake.jpg";
import TabComponent from './Tab.js'

function App() {

  // const [value, onChange] = useState(new Date());
  // console.log(value);

  return (
    <div className="App" >
          {/* <div style={{ backgroundImage: `url(${background})`}}> */}

      <header>
        <MenuContainer />
      </header>

      <body className="bodyContainer" style={{ backgroundImage: `url(${background})`}}>
      {/* <Calendar onChange={onChange} value={value} /> */}
      {/* <Progress value={20} colorScheme='pink'/> */}
      <TabComponent />
      {/* <CalendarPage /> */}
      {/* <ListeReservations /> */}
      </body>
      </div>
  );
}

export default App;
