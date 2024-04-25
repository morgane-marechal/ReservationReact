import React from 'react';
import { useState, useEffect } from 'react';

const FormReservation = () => {
  const [success, setSuccess] = useState(['']); //à changer quand on fera venir les infos de reservation

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newReservation = {
      email: "newtest@proton.net",
      name: 'Jean Test',
      customernumber: 6,
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
      setSuccess('Réservation au nom de '+newReservation.name+ ' le '+ newReservation.date+' à '+newReservation.time)
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
    </div>
  );
};

export default FormReservation;