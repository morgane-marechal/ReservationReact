import { useState, useEffect } from 'react';
import './App.css';



const ListeReservations = () => {
  const [resa, setResa] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/listeReservations`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setResa(data);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois sont indexés à partir de zéro
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${day}-${month}-${year}`
    return formattedDate; 
  };


  return (
    <div className = 'cardContainer'>

{resa.map((oneResa,index) => (

<div className = 'card'>
    {oneResa.name}  
      <p>{oneResa.email}</p>
      <p>Numero de table : {oneResa.table_id}</p>
      <p>Nombre de personnes : {oneResa.customernumber}</p>
      <p>Jour : {formatDate(oneResa.reserveddate)}</p>
     <p>Heure : {oneResa.reservedtime}</p>
</div>





      ))}
    </div>
  );
};
export default ListeReservations;