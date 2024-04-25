import * as React from "react";
import { useState, useEffect } from "react";
import { Text, Input, Button } from "@chakra-ui/react";

import ".././App.css";
import "react-calendar/dist/Calendar.css";

function AlertDispo() {
  const [placeDispo, setPlaceDispo] = useState([]); //nombre limite de tables de 2 modulables
  const [message, setMessage] = useState([
    "Ce restaurant peur accueillir 100 couverts",
  ]); //nombre limite de tables de 2 modulables

  // foction : ici on va aller chercher en bdd toute les resas qui sont à la date et à l'heure indiquée et soustraitre le nombre de personnes attendues
  //sachant qu'un nombre impaire de personnes prendra ce nombre de table /2 +1.

  const checkBooked = async () => {
    const bookingTime = {
      date: "2023-04-22",
      time: "13:00:00",
    };
    try {
      const res = await fetch(
        `http://localhost:3001/bookingNumber/${bookingTime.date}/${bookingTime.time}`
      );
      const data = await res.json();
      console.log(data);
      const customerNumb = data[0].sum_customer;
      setPlaceDispo(100 - customerNumb);
      console.log(placeDispo);
      setMessage("Nombre de places restantes: " + placeDispo);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    checkBooked();
  }, []);

  return (
    <div className="cardCheckBooking">
      <Button colorScheme="teal" size="xs" onClick={checkBooked}>
        {message}
      </Button>
    </div>
  );
}

export default AlertDispo;
