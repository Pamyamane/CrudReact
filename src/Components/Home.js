// Sidebar.js
import { Button, Container, Input } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // If using React Router
import img from './image 289 (1).png';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import AllInboxSharpIcon from '@mui/icons-material/AllInboxSharp';

const Home = () => {

  const navigate = useNavigate();


  const onClickHome = () => {
    navigate('/Home')
  }
  const onClickCategory = () => {
    navigate('/Catageory')
  }
  const onClickProduct = () => {
    navigate('/Product')
  }
  const onClickLogOut = () => {

    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      navigate('/');
    }
  };

  return (
   
    <Container>
      
      <div className="sidebar">
        <ul >
          <li onClick={onClickHome} ><Link to="/" style={{ color: 'Black' }}><HomeRoundedIcon style={{ marginRight: '15px' }} /> Home </Link></li>
          <li onClick={onClickCategory}><Link to="/Catageory" style={{ color: 'Black' }}><QrCodeRoundedIcon style={{ marginRight: '0px' }} /> Category</Link></li>
          <li onClick={onClickProduct}><Link to="/Product" style={{ color: 'Black' }}><AllInboxSharpIcon style={{ marginRight: '10px' }} /> Product</Link></li>
        </ul>

      </div>
      <div style={{ textAlign: 'right', color: 'red' }}>
        <Button onClick={onClickLogOut} type='text' style={{
          textAlign: 'right',
          color: 'red',
          paddingRight: '10px',
          border: '1px solid red'
        }}>Log Out</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

        <img src={img} style={{
          marginTop: "30px",
          width: '200px'
        }} />
        <h3 style={{ marginTop: '0px' }}>Welcome to DigitalFlake Admin</h3>
      </div>

    </Container>
  );
};

export default Home;
