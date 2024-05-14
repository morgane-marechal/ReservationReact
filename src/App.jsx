import './App.css';
import ListeReservations from './components/fetchReservations.jsx';
import { useState, useEffect } from 'react';
import CalendarPage from './components/CalendarPage.jsx';
import { Progress } from '@chakra-ui/react';
import MenuContainer from './components/MenuComp.jsx';
import background from "./image/background_cake.jpg";
//import TabComponent from './components/Tab.jsx';
import StepperComponent from './components/Stepper.jsx';
import { useRef } from 'react';

function App() {
  const [reservationData, setReservationData] = useState(() => {
    // Récupérer les données du localStorage s'il y en a, sinon retourner un objet vide
    // const savedData = localStorage.getItem('reservationData');
    // return savedData ? JSON.parse(savedData) : {
    //   email: 'test',
    //   name: 'test',
    //   customernumber: 0,
    //   date: 'test',
    //   time: 'test'
    // };
  });

  // useEffect(() => {
  //   localStorage.setItem('reservationData', JSON.stringify(reservationData));
  // }, [reservationData]);
  useEffect(() => {
    localStorage.setItem('date', null);
    localStorage.setItem('time', null);
    localStorage.setItem('guestNumber', null);
    localStorage.setItem('nameCustomer', null);
    localStorage.setItem('email', null);
  });


  return (
    <div className="App">
      <header>
        <MenuContainer />
      </header>

      <body className="bodyContainer" style={{ back: `url(${background})`}}>
        <StepperComponent />
      </body>
    </div>
  );
}

export default App;