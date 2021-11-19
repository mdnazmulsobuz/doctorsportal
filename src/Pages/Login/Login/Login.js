import { Button, Container, Grid, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState([]);
    const  {user, loginUser, signInWithGoogle, isLoading,authError} = useAuth();
    
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e =>{
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, navigate)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Email" 
                        name="email"
                        type="email"
                        onBlur={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Password" 
                        type= "password"
                        name="password"
                        onBlur={handleOnChange}
                        variant="standard" />
                        <Button 
                        sx={{width: '75%', m : 1}}
                        variant="contained" 
                        type='submit' >Login</Button>
                        <NavLink
                        style={{textDecoration: 'none'}}
                        to="/register"
                        ><Button 
                        variant="text" 
                        type='submit' >New User? Register Here.</Button>
                        </NavLink>
                        {isLoading  &&  <CircularProgress/>}
                        {user?.email && <Alert severity="success"> Login Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>Or</p>
                    <p>Use Google for Login.</p>
                    <Button 
                        variant="contained" onClick={handleGoogleSignIn} >Google Sing In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;