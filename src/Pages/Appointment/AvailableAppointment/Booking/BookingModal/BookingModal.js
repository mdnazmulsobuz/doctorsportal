import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';



const BookingModal = ({openBooking, handleBookingClose, booking, date}) => {
    const {name, time } = booking;

    // collect date and sent to server
    const handleBookingSubmit = e =>{
        handleBookingClose();
        alert('Submitting');
        e.preventDefault();
    }

    return (
        
         <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openBooking}
          onClose={handleBookingClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openBooking}>
            <Box  sx={{
                position: 'absolute',
                p: 4, 
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                backgroundColor: '#fff',
                border: '2px solid #000',
                
            }}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                {name}
              </Typography>
              <form onSubmit={handleBookingSubmit}>
                <TextField
                    sx={{width: '90%', m:1}}
                    disabled
                    id="outlined-size-small"
                    defaultValue={time}
                    size="small"
                />
                <TextField
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    defaultValue= 'Your Name'
                    size="small"
                />
                <TextField
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    defaultValue= 'Your Email'
                    size="small"
                />
                <TextField
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    defaultValue= 'Your Phone number'
                    size="small"
                />
                <TextField
                    disabled
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    defaultValue= {date.toDateString()}
                    size="small"
                />
                <Button type='submit' variant='contained'  style={{backgroundColor: '#10CFE1'}}>SUBMIT</Button>
             </form>
            </Box>
          </Fade>
        </Modal> 
      
    );
};

export default BookingModal;