import './App.css';
import ListeReservations from './components/fetchReservations.jsx';
import { useState, useEffect } from 'react';
import CalendarPage from './components/CalendarPage.jsx';
import LoginPage from './Auth/LoginPage.jsx';
import { Progress } from '@chakra-ui/react';
import MenuContainer from './components/MenuComp.jsx';
import background from "./image/background_cake.jpg";
//import TabComponent from './components/Tab.jsx';
import StepperComponent from './components/Stepper.jsx';
import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
    localStorage.setItem('reservationsNum', null);
  });


  return (
    <Router>
    <div className="App">
      <header>
        <MenuContainer />
      </header>

      <main className="bodyContainer" style={{ back: `url(${background})`}}>

      <Routes>
            <Route path="/" element={<StepperComponent />} />
            <Route path="/login" element={<LoginPage />} />
      </Routes>
 
      </main>
    </div>
    </Router>
  );
}

export default App;