import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whiteing from '../../../images/whitening.png';

const services = [
    {
    name: "Fluoride Treatment",
    description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from",
    img: fluoride
},
    {
    name: "Cavity Filling",
    description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from",
    img: cavity
},
    {
    name: "Whitening",
    description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from",
    img: whiteing
},
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant='h6' sx={{mt: 5}} style={{color: '#10CFE1'}}>
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 4}}  variant="h4" component="div">
                    Serivecs we povided
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service
                        key = {service.name}
                        service = {service}
                    ></Service>)
                }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;