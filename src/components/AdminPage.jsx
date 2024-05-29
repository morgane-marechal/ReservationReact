import * as React from "react";
import { useState, useEffect } from "react";
import AdminReservationsList from "./AdminReservationsList";
import { color } from "framer-motion";
import { Input, Button, Box, Flex } from "@chakra-ui/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import ".././App.css";

const Admin = () => {
  const [resa, setResa] = useState([]);
  const [error, setError] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filteredReservations, setFilteredReservations] = useState([]);

  const [cancelledReservationIds, saveCancelledReservationIds] =
    useLocalStorage("cancelled", []);

  useEffect(() => {
    fetch("http://localhost:3002/listeReservations")
      .then((res) => res.json())
      .then((data) => {
        setResa(data);
        setFilteredReservations(data);
      })
      .catch((error) => {
        setError("Error fetching reservations");
        console.error("Error fetching reservations: ", error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3002/admin/deleteReservation/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          const updateReservations = resa.filter(
            (reservation) => reservation.id !== id
          );
          setResa(updateReservations);
          setFilteredReservations(updateReservations);
          alert("Reservation has been deleted");
        } else {
          setError("Failed to delete reservation");
          console.error(res);
        }
      })
      .catch((error) => {
        setError("Failed to delete reservation");
        console.error("Error deleting reservation");
      });
  };

  /**
   * Handler that is called to cancel a reservation using a given `id`
   *
   * @param { number } id - the reservation id
   */
  const handleCancel = (id) => {
    // check if the reservation id is already in the list of cancelled reservation ids
    if (cancelledReservationIds.includes(id)) {
      alert("Reservation already cancelled");
      return;
    }

    // Add the reservation id to the list of cancelled reservation ids
    saveCancelledReservationIds([...cancelledReservationIds, id]);

    console.log(`reservation id is => ${id}`);
  };

  const handleSearchByName = () => {
    const filtered = resa.filter((reservation) =>
      reservation.name.toLowerCase().includes(filterName.toLocaleLowerCase())
    );
    setFilteredReservations(filtered);
  };

  const handleSearchByDate = () => {
    // create a new filter date string
    // const newFilterDate = filterDate.split("-").reverse().join("-")

    // console.log(`newFilterDate is => ${newFilterDate}`);

    // const formattedDate = new Date(filterDate).toISOString();

    // console.log(`filterDate => ${filterDate} & formattedDate is => ${formattedDate}`);
    console.log(`filterDate => ${filterDate}`);



    const filtered = resa.filter((reservation) => {

      console.log(`reservation is => `, reservation);
      const currentDate = new Date(reservation.reserveddate);

      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
      const day = String(currentDate.getDate()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}`;
      
      console.log(`formattedDate is => ${formattedDate}`);
      return formattedDate === filterDate;

  });

    setFilteredReservations(filtered);
  };

  const handleResetFilters = () => {
    setFilterName("");
    setFilterDate("");
    setFilteredReservations(resa); // Reset to all reservations
  };

  const flexWidth = "500px";

  return (
    <div>
      <h1 style={{ color: "white" }}>Hello, Admin 👋 </h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Flex
        gap="10px"
        direction="column"
        marginBottom="100px"
        width={flexWidth}
        // alignItems={"center"}
        // justifyContent={"center"}
      >
        <Box display="flex" flexDirection="row" padding="0 24px">
          <Input
            className="ReservationInput"
            type="text"
            placeholder="Cherher par nom"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
          <Button onClick={handleSearchByName} marginLeft="10px">
            Rechercher
          </Button>
        </Box>
        <Box display="flex" flexDirection="row" padding={"0 24px"}>
          <Input
            className="ReservationInput"
            type="date"
            placeholder=""
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <Button onClick={handleSearchByDate} marginLeft="10px">
            Rechercher
          </Button>
        </Box>
      </Flex>

      <AdminReservationsList
        reservations={filteredReservations}
        onDelete={handleDelete}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Admin;
