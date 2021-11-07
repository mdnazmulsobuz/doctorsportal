import { Grid, Typography, Button } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from './BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time , space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevetion ={3} sx={{py: 5}}> 
                <Typography variant='h5' style={{color: '#10CFE1', fontWeight: 600}} gutterBottom component='div'>
                    {name}
                </Typography>
                <Typography variant='h6'  style={{color: '#000'}} gutterBottom component='div'>
                    {time}
                </Typography>
                <Typography variant='caption' gutterBottom component='div'>
                    {space} SPACES AVAIlABLe
                </Typography>
                <Button onClick={handleBookingOpen} variant='contained' style={{backgroundColor: '#10CFE1'}}>BOOK APPOINTMENT</Button>
            </Paper>    
        </Grid>
        <BookingModal
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            setBookingSuccess = {setBookingSuccess}
            date ={date}
        ></BookingModal>
        </>
    );
};

export default Booking;