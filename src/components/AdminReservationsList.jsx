import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Button } from '@chakra-ui/react';
import { useLocalStorage } from '@uidotdev/usehooks';
import '.././App.css';
import clsx from 'clsx';



const AdminReservationsList = ({ reservations, onDelete, onCancel }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };


  const [ cancelledReservationIds ] = useLocalStorage("cancelled", []);

  return (
    <TableContainer>
      <Table variant="simple" color="white">
        <TableCaption>Reservations List</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Email</Th>
            <Th>Name</Th>
            <Th>Customer Number</Th>
            <Th>Date</Th>
            <Th>Time</Th>
          
          </Tr>
        </Thead>
        <Tbody>
          {reservations.map((reservation) => (
            <Tr key={reservation.id} className={clsx({"CancelledText": cancelledReservationIds.includes(reservation.id)})}>
              <Td className='white-text'>{reservation.id}</Td>
              <Td className='white-text'>{reservation.email}</Td>
              <Td className='white-text'>{reservation.name}</Td>
              <Td className='white-text'>{reservation.customernumber}</Td>
              <Td className='white-text'>{formatDate(reservation.reserveddate)}</Td>
              <Td className='white-text'>{reservation.reservedtime}</Td>
              <Td>
                <Button padding="3" colorScheme="red" size="sm" onClick={() => onDelete(reservation.id)}>Delete</Button>
                <Button padding="3" colorScheme="yellow" size="sm" onClick={() => onCancel(reservation.id)}>Cancel</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
     
      </Table>
    </TableContainer>
  );
};

export default AdminReservationsList;

