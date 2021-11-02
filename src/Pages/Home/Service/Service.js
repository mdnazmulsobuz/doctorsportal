import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const {name, description, img} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
                <CardMedia
                    component='img'
                    style = {{width: 'auto', height: '70', margin: ' 0 auto' }} 
                    image={img}
                    alt=''
                ></CardMedia>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
             </Card>  
        </Grid>
    );
};

export default Service;