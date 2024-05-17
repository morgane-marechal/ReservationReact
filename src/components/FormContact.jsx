import React from 'react';
import { useState, useEffect } from 'react';

const FormContact = () => {
  const [nameCustomer, setNameCustomer] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    // const newReservation = {
    //   email: "newmachst@proton.net",
    //   name: 'Test truc',
    //   customernumber: 6,
    //   date: '2023-04-22',
    //   time: '13:00:00'
    // };

      localStorage.setItem('guestName', nameCustomer);
      localStorage.setItem('guestEmail', email);
      console.log('localstorage name:'+localStorage.getItem('guestName'));
  };
  

  return (
    <div className="formPage">
      <form  className="formPage" onSubmit={handleSubmit}>
          <label>Entrez votre nom:</label>
          <input
            type="text" 
            value={nameCustomer}
            onChange={(e) => setNameCustomer(e.target.value)}
          />

        <label>Entrer votre email:</label>
          <input
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <button type="submit">Valider les informations</button>
      </form>
    </div>
  );
};

export default FormContact;