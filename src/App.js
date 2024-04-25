// import logo from './logo.svg';
import "./App.css";
//import ListeReservations from '.components/fetchReservations.jsx';
//import { ChakraProvider } from '@chakra-ui/react';
import * as React from "react";
//import { useState } from 'react';
//import CalendarPage from './components/CalendarPage.jsx';
//import { Progress } from '@chakra-ui/react';
import MenuContainer from "./components/MenuComp.jsx";
import background from "./image/background_cake.jpg";
import TabComponent from "./components/Tab.jsx";

function App() {
  // const [value, onChange] = useState(new Date());
  // console.log(value);

  return (
    <div className="App">
      {/* <div style={{ backgroundImage: `url(${background})`}}> */}

      <header>
        <MenuContainer />
      </header>

      <body
        className="bodyContainer"
        style={{ backgroundImage: `url(${background})` }}
      >
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
