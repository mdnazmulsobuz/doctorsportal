import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://hidden-journey-40317.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setSuccess('doctor added Successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
        });

    }

    return (
        <div>
           <form onSubmit= {handleSubmit}>
            <TextField 
                sx= {{width: "50%"}}
                id="name" 
                label="Your Name" 
                required
                onChange= {e =>setName(e.target.value)}
                variant="standard" />
                <br />
            <TextField 
                sx= {{width: "50%"}}
                id="email" 
                type='email'
                label="Your Email" 
                required
                onChange= {e =>setEmail(e.target.value)}
                variant="standard" />
                <br />
                <Input
                accept="image/*" 
                type="file" 
                onChange = {e => setImage(e.target.files[0])}/>
                <br/>
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
           </form>
           {success && <p style={{color: 'green'}}>{success}</p>}
        </div>
    );
};

export default AddDoctor;