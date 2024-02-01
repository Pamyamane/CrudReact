import React, { useState } from 'react';
import { Typography, TextField, InputAdornment, Button, Grid, Container, IconButton } from "@mui/material";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import ErrorMessage from '../ReusableComponents/ErrorMessage';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import img from './image 289 (1).png';
import img1 from './image 293 (1).png'

function UserLogin() {

  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [usernameError, setUserNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passworderror, setPassworderror] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const emailRegExp = /^\S+@\S+\.\S+$/;
  const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const onSubmit = () => {
    let isError = false;

    if (password == '') {
      setPassworderror('Password is Required')
      isError = true
    }
    else if (password.length < 4) {
      setPassworderror("Password must be at least 8 characters long");
      isError = true;
    }  else {
      setPassworderror('');
    }

    if (username == '') {
      setUserNameError('Username is Required')
      isError = true;
    }
    else if (!emailRegExp.test(username) && !phoneRegExp.test(username)) {
      setUserNameError('Invalid email address or Phone number');
      isError = true;
    } else {
      setUserNameError('');
    }

    if (!isError) {
      navigate('/Home')
    }
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100' }} >
      <img
        src={img1}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
        }}
        alt="Background Image"
      />


      <Container style={{ justifyContent: "center", alignItems: "center", top: 100, left: 500, backgroundColor: "white", position: "fixed", width: '70vh' }}>
        <br></br>

        <br></br>
        <br></br>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

          <img src={img} style={{
            marginTop: "30px",
            width: '200px'
          }} />

          <h3 style={{ marginTop: '0px' }}>Welcome to DigitalFlake Admin</h3>

          <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={2}>
              <Typography >
                Email Id :
              </Typography>
            </Grid>

            <Grid item xs={10}>
              <TextField type='text' error={usernameError !== ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ForwardToInboxIcon sx={{ color: "orange" }} />
                    </InputAdornment>
                  ),
                  style: {
                    borderRadius: "20px", marginTop: "40px", backgroundColor: "white", width: '350px'
                  }
                }}

                value={username}
                
                onChange={(e) => { setUserName(e.target.value) }}
              />
              {/* <ErrorMessage error={usernameError} /> */}
            </Grid>
          </Grid>

          <br></br>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={2}>
              <Typography >
                Password:
              </Typography>
            </Grid>

            <Grid item xs={10}>
            <TextField
      error={passworderror !== ''}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleTogglePasswordVisibility}
              edge="end"
              style={{ color: "black" }}
            >
              {showPassword ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
            </IconButton>
          </InputAdornment>
        ),
        style: {
          borderRadius: "20px",
          marginTop: "20px",
          border: "1px solid white",
          width: '350px'
        }
      }}
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(e) => { setPassword(e.target.value) }}
    />
              <ErrorMessage error={passworderror} />
            </Grid>
          </Grid>
        </div>

        <div style={{ textAlign: 'right', paddingRight: '40px' }}>
          <Link to="/ForgotPassword" style={{ textDecoration: 'none', color: 'black' }}>
            Forgot Password?
          </Link>
          <br></br>
          <Button
            variant="contained"


            style={{
              borderRadius: "30px",
              width: "300px", marginTop: "20px",
              color: "white",
              backgroundColor: "#7130a6",
            }}
            onClick={onSubmit}
          >
            <b>Login</b>
          </Button>
        </div>
        <br></br>
        <br></br>

      </Container>
    </Container>
  )
}

export default UserLogin;
