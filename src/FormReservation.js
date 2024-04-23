import React from 'react';
import { useState, useEffect } from 'react';

const FormReservation = () => {
  const [success, setSuccess] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();


    const newReservation = {
      email: "mamima@proton.net",
      name: 'Martine Lequin',
      customernumber: 5,
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

      console.log('vous avez réservé pour '+newReservation.name+ ' le '+ newReservation.date+' à '+newReservation.time);
      setSuccess('Vous avez réservé au nom de '+newReservation.name+ ' le '+ newReservation.date+' à '+newReservation.time)

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
    </div>
  );
};

export default FormReservation;