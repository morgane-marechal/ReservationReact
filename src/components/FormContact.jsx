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


      console.log(nameCustomer+ email);
      console.log('localstorage name:'+localStorage.getItem('guestName'));
      console.log('localstorage email:'+localStorage.getItem('guestEmail'));



  };
  

  return (
    <div className="formPage">
      <form  className="formPage" onSubmit={handleSubmit}>
        <label>Entrez votre nom:
          <input
            type="text" 
            value={nameCustomer}
            onChange={(e) => setNameCustomer(e.target.value)}
          />
        </label>
        <label>Entrer votre email:
          <input
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Valider les informations</button>
      </form>
    </div>
  );
};

export default FormContact;