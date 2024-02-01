// AddCatagory.js
import React, { useState } from 'react';
import { Button, TextField, Container, Grid, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import AllInboxSharpIcon from '@mui/icons-material/AllInboxSharp';
import DropDown from '../ReusableComponents/Dropdown';
import axios from 'axios'
import { Select, MenuItem } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCatagory = () => {

    const navigate = useNavigate();

    const [isSaving, setIsSaving] = useState(false);
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    });
    const { name, username, email } = user;

    const [status, setStatus] = useState();

    console.log(status, "status");

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

   

    // const onClickSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!user.name || !user.username || !status) {
    //         alert('Please fill in all fields');
    //         return;
    //     }

    //     try {
    //         // Update the email property in the user state with the value of status
    //         setUser({ ...user, email: status });

    //         await axios.post("http://localhost:3003/users", user);

    //         const emailData = {
    //             name: user.name,
    //             username: user.username,
    //             email: user.email,
    //         };

    //         //await axios.post("http://localhost:3003/sendEmail", emailData);
           
    //     } catch {
    //         alert('Category Added Successfully!');

    //         navigate('/Catageory');
    //     }
    // };


    const onClickSubmit = async (e) => {
        e.preventDefault();
       

        if (!name || !username ||  !email) {
            alert('Please fill in all fields');
            return;
        }
        try {
            await axios.post("http://localhost:3003/users", user);
            alert('Product Added Successfully!');
            navigate('/Catageory');
        }
        catch (error) {
            console.error('Error adding Product:', error);
           
        }
    };

    
    // const onClickSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!user.name || !user.username || !status) {
    //         alert('Please fill in all fields');
    //         return;
    //     }

    //     if (isSaving) {
    //         // Save operation is already in progress, ignore the click
    //         return;
    //     }

    //     try {
    //         setIsSaving(true); // Set isSaving to true before making requests

    //         // Update the email property in the user state with the value of status
    //         setUser({ ...user, email: status });

    //         await axios.post("http://localhost:3003/users", user);

    //         const emailData = {
    //             name: user.name,
    //             username: user.username,
    //             email: user.email,
    //         };

    //         await axios.post("http://localhost:3003/sendEmail", emailData);

    //         toast.success('Category Added Successfully!');
    //         navigate('/Catageory');
    //     } catch (error) {
    //         console.error('Error adding category:', error);
    //         toast.error('Error adding category. Please try again.');
    //     } finally {
    //         setIsSaving(false); // Reset isSaving regardless of success or failure
    //     }
    // };

     const onStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const ItemList = [
        { Id: "1", Name: "Active", Value: "1" },
        { Id: "2", Name: "InActive", Value: "2" }

    ]



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
        navigate('/Catageory');
    }

    return (
        <Container>
             <ToastContainer />
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
                            <h2> Add Category</h2>
                            <br></br>
                            <br></br>

                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={4}>
                                    <TextField
                                        style={{
                                            borderRadius: "30px",
                                            width: "250px",
                                        }}
                                        label="CategoryName"
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
                                        label="Description"
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
                                        label="Status"
                                        value={email}
                                        name='email'
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

export default AddCatagory;
