// AddCatagory.js
import React, { useState } from 'react';
import { Button, TextField, Container, Grid, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import AllInboxSharpIcon from '@mui/icons-material/AllInboxSharp';
import DropDown from '../ReusableComponents/Dropdown';
import axios from 'axios'

const AddProduct = () => {

    const navigate = useNavigate();
    
    // State to store the new category
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone:'',
        date:'',
        status:''
    });

    const { name, username, email,phone,date, status} = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // const onClickSubmit = async e =>{
    //     e.preventDefault();
    //     await axios.post("http://localhost:3003/users", user);

    // }
    const onClickSubmit = async (e) => {
        e.preventDefault();

        if (!name || !username || !email || !phone || !date || !status) {
            alert('Please fill in all fields');
            return;
        }
        try {
            await axios.post("http://localhost:3003/users1", user);
            alert('Product Added Successfully!');
            navigate('/Product');
        }
        catch (error) {
            console.error('Error adding Product:', error);
           
        }
    };


    // const ItemList = [
    //     { Id: "1", Name: "Active", Value: "1" },
    //     { Id: "2", Name: "InActive", Value: "2" }

    // ]



    const onClickHome = () => {
        navigate('/Home');
    }

    const onClickCategory = () => {
        navigate('/Catageory');
    }

    const onClickProduct = () => {
        navigate('/Product');
    }
    const onClickSave = () => {
        navigate('/Catageory');
    }
    const onClickCancel = () => {
        navigate('/Product');
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Paper>
                        <div className="sidebar">
                            <ul >
                                <li onClick={onClickHome} ><Link to="/" style={{ color: 'Black' }}><HomeRoundedIcon style={{ marginRight: '15px' }} /> Home </Link></li>
                                <li onClick={onClickCategory}><Link to="/Catageory" style={{ color: 'Black' }}><QrCodeRoundedIcon style={{ marginRight: '0px' }} /> Category</Link></li>
                                <li onClick={onClickProduct}><Link to="/Product" style={{ color: 'Black' }}><AllInboxSharpIcon style={{ marginRight: '10px' }} /> Product</Link></li>
                            </ul>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper>
                        <div>
                            <h2> Add Product</h2>
                            <br></br>
                            <br></br>

                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={4}>
                                    <TextField
                                        style={{
                                            borderRadius: "30px",
                                            width: "250px",
                                        }}
                                        label="Category"
                                        value={name}
                                        name='name'
                                        onChange={(e) => onInputChange(e)}

                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField
                                        style={{
                                            borderRadius: "30px",
                                            width: "250px",
                                        }}
                                        label="Product Name"
                                        value={username}
                                        name='username'
                                        onChange={(e) => onInputChange(e)}

                                    />
                                </Grid>

                                <Grid item xs={2}>
                                    <TextField
                                        style={{
                                            borderRadius: "30px",
                                            width: "200px",
                                        }}
                                        label="Pack Size"
                                        value={email}
                                        name='email'
                                        onChange={(e) => onInputChange(e)}

                                    />
                                    {/* <DropDown itemList={ItemList} ClickItem={clickTeacherDropdown} DefaultValue={SelectTeacher} Label={"Select Teacher:"}/>  */}
                                </Grid>
                            </Grid>




                            <br></br>
                            <br></br>

                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={4}>
                                    <TextField
                                        style={{
                                            borderRadius: "30px",
                                            width: "250px",
                                        }}
                                        label="MRP"
                                        value={phone}
                                        name='phone'
                                        onChange={(e) => onInputChange(e)}

                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField
                                        style={{
                                            borderRadius: "30px",
                                            width: "250px",
                                        }}
                                        label="Product Image"
                                        value={date}
                                        name='date'
                                        onChange={(e) => onInputChange(e)}

                                    />
                                </Grid>

                                <Grid item xs={2}>
                                    <TextField
                                        style={{
                                            borderRadius: "30px",
                                            width: "200px",
                                        }}
                                        label="Status"
                                        value={status}
                                        name='status'
                                        onChange={(e) => onInputChange(e)}

                                    />
                                    {/* <DropDown itemList={ItemList} ClickItem={clickTeacherDropdown} DefaultValue={SelectTeacher} Label={"Select Teacher:"}/>  */}
                                </Grid>
                            </Grid>
                            <br></br>


                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={2}>
                                    <Button variant="contained" onClick={onClickSubmit} style={{
                                        marginTop: "20px",
                                        borderRadius: "30px",
                                        width: "100px",
                                        color: "white",
                                        backgroundColor: "#7130a6",
                                    }} >
                                        Save
                                    </Button>
                                </Grid>

                                <Grid item xs={2}>
                                    <Button variant="contained" onClick={onClickCancel} style={{
                                        marginTop: "20px",
                                        borderRadius: "30px",
                                        width: "100px",
                                        color: "white",
                                        backgroundColor: "#7130a6",
                                    }} >
                                        Cancel
                                    </Button>

                                </Grid>
                            </Grid>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Paper>
                </Grid>
            </Grid>
            
        </Container>
    );
}

export default AddProduct;
