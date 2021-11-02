import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop:175,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1, my: 5, px: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img 
                    style={{width:450, marginTop: '-105px'}}
                    src={doctor} alt=''/>
                </Grid>
                <Grid item xs={12} md={6} sx={{ 
                    display: 'flex', 
                    justifyContent: "flex-start",
                    textAlign: 'left'}}>
                   <Box>
                        <Typography variant='h6' sx={{mt: 5}} style={{color: '#10CFE1'}}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant='h4' sx={{my: 5}} style={{color: 'white'}}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{mt: 5}}  style={{color: 'white', fontSize: 14, fontWeight: 300}}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo tempore veritatis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo tempore veritatis.
                        </Typography>
                        <Button variant='contained'  sx={{mt: 4}} style={{backgroundColor: '#10CFE1'}}>Learn More</Button>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;