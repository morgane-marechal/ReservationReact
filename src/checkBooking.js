import React from 'react';
import { useState, useEffect } from 'react';

const CheckBooking = () => {
  const [success, setSuccess] = useState(['Reservation au nom de UseState']); //à changer quand on fera venir les infos de reservation
  const [resa, setResa] = useState(['Reservation au nom de UseState']); 


  // const [checkResa, setCheckResa] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3001/listeReservations`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setResa(data);
  //     });
  // }, []);
 const checkBooked = async (event) => {
    event.preventDefault();
    const bookingTime = {
      date: '2023-04-22',
      time: '13:00:00'
    };
    // try {
        useEffect(() => {
    fetch(`/bookingNumber/:${checkBooked.date}/:${checkBooked.time}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setResa(data);
      });
  }, []);
      // const response = await fetch('http://localhost:3001/bookingNumber', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(bookingTime)
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to create reservation');
      // }
      // console.log('vous avez réservé pour '+newReservation.name+ ' le '+ newReservation.date+' à '+newReservation.time);

    // } catch (error) {
    //   console.error('Error creating reservation:', error);
    //   // Gérer les erreurs
    // }
  };
  







  const handleSubmit = async (event) => {
    event.preventDefault();
    const newReservation = {
      email: "apresclass@proton.net",
      name: 'Laclasse Parfaite',
      customernumber: 3,
      date: '2023-04-22',
      time: '13:00:00'
    };

    try {
      const response = await fetch('http://localhost:3001/createReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReservation)
      });

      if (!response.ok) {
        throw new Error('Failed to create reservation');
      }
      // setSuccess('Réservation au nom de '+newReservation.name+ ' le '+ newReservation.date+' à '+newReservation.time)
      console.log('vous avez réservé pour '+newReservation.name+ ' le '+ newReservation.date+' à '+newReservation.time);
    } catch (error) {
      console.error('Error creating reservation:', error);
      // Gérer les erreurs
    }
  };
  

  return (
    <div className="formPage">
      <span>Est-ce que ces informations sont correctes ?</span>
      <div>{success}</div>
      <form  className="formPage" onSubmit={handleSubmit}>
        <button type="submit">Valider la réservation</button>
      </form>
      <form  className="formPage" onSubmit={checkBooked}>
        <button type="submit">Vérifier le nombre de places disponibles</button>
      </form>
    </div>
  );
};

export default CheckBooking;