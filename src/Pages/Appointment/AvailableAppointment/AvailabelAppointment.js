import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from './Booking/Booking';

const bookings = [
    {
        id:1,
        name: 'Teed Orthodinics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id:2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8
    },
    {
        id:3,
        name: 'Teed Cleaning',
        time: '11.00 AM - 12.00 AM',
        space: 12
    },
    {
        id:4,
        name: 'Cavity Protection',
        time: '03.00 PM - 04.00 AM',
        space: 14
    },
    {
        id:5,
        name: 'Pediatric Dental',
        time: '05.00 AM - 06.00 AM',
        space: 20
    },
    {
        id:6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00 AM',
        space: 9
    },

]

const AvailabelAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container sx={{my:5}}>
            <Typography variant='h4' sx={{color: '#10CFE1', fontWeight: 500}}>
                Avaiable Appointment {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success"> Bookign sent Successfully</Alert>}
            <Grid container spacing={2}>
               {
                   bookings.map(booking => <Booking
                   key={booking.id}
                   booking={booking}
                   date ={date}
                   setBookingSuccess = {setBookingSuccess}
                   ></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default AvailabelAppointment;