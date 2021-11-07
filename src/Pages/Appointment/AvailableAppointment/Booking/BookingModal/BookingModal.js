import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../../../hooks/useAuth';



const BookingModal = ({openBooking, handleBookingClose, booking, date, setBookingSuccess}) => {
    const {name, time } = booking;
    const {user} = useAuth();
    const initialInfo = {patientName: user.displayName, email: user.email, phone : ''}
    const  [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field] = value;
      setBookingInfo(newInfo);

    }

    // collect date and sent to server
    const handleBookingSubmit = e =>{
      // collect data
      const appointment = {
        ...bookingInfo,
        time, 
        serviceName: name,
        date : date.toLocaleDateString()
      }

      // send date server
      fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(appointment)
      })
      .then(res =>res.json())
      .then(data =>{
        if(data.insertedId){
          setBookingSuccess(true);
          handleBookingClose();
        }
      })

        
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
                    name = "patientName"
                    onBlur = {handleOnBlur}
                    defaultValue= {user.displayName}
                    size="small"
                />
                <TextField
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "patientEmail"
                    onBlur = {handleOnBlur}
                    defaultValue= {user.email}
                    size="small"
                />
                <TextField
                    sx={{width: '90%', m:1}}
                    id="outlined-size-small"
                    name = "phone"
                    onBlur = {handleOnBlur}
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