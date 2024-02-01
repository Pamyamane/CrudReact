import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

    const [Email, setEmail] = useState('');

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                <h3 style={{ color: '#7130a6', marginTop: '150px' }}>Did you forgot your password?</h3>
                Enter your email address and we'll send you a link to restore password


                <Typography style={{ marginTop: '50px' }}>
                    <b>Email Address</b>
                </Typography>
                <TextField type='text' value={Email} style={{ width: "400px" }} onChange={(e) => setEmail(e.target.value)} />

                <Button
                    variant="contained"
                    style={{
                        borderRadius: "30px",
                        width: "300px", marginTop: "20px",
                        color: "white",
                        backgroundColor: "#7130a6",
                    }}
                >
                    <b>Request Reset Link</b>
                </Button>

                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <u>Back to log in</u>
                </Link>
            </div>
        </>
    )
}

export default ForgotPassword
