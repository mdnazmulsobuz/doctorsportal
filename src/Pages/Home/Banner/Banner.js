import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, Box} from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    marginTop:' 15px'
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
} 

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                    <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left'}}>
                        <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{mt: 5}}  style={{color: 'gray', fontSize: 14, fontWeight: 300}}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo tempore veritatis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nemo tempore veritatis.
                        </Typography>
                        <Button variant='contained' style={{backgroundColor: '#10CFE1'}}>GET APPOINTMENT</Button>
                        </Box>
                    </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width: 400}} src={chair} alt='' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;