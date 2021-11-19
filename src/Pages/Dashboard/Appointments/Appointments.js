import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const Appointments = ({ date }) => {
    const {user, token} = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect (()=>{
        const url =`https://hidden-journey-40317.herokuapp.com/appointments?email=${user.email}&date=${date}`
        fetch(url, {
          headers: {
            'authoriztion' : `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data =>setAppointments(data));
    }, [date, user.email, token])
        return (
        <div>
            <h2>Appointments: {appointments.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.payment?
               "Paid" :
               <Link to={`/dashboard/payment/${row._id}`}> <button>Pay</button></Link>
                }</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;