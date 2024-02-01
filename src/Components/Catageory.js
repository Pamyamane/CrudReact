
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Container, Grid, Paper, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import AllInboxSharpIcon from '@mui/icons-material/AllInboxSharp';
import { Filter } from '@mui/icons-material';

const Category = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [record, setrecord] = useState(users);

    useEffect(() => {
        LoadUsers();
    }, []);

    const LoadUsers = async () => {
        const Result = await axios.get("http://localhost:3003/users");
        setUsers(Result.data);
        setrecord(Result.data);
    }

    // const onClickDelete = async id => {
    //     await axios.delete('http://localhost:3003/users/${id}');
    //     // LoadUsers();
    // }

    const onClickDelete = async (id) => {
        const userConfirmed = window.confirm("Are you sure you want to delete ?");

        if (userConfirmed) {
            try {
                await axios.delete(`http://localhost:3003/users/${id}`);

            } catch (error) {
                console.error('Error deleting user:', error);
            }
        } else {
            console.log('Deletion canceled by the user');
        }
        LoadUsers();
    };


    const onClickHome = () => {
        navigate('/Home');
    }

    const onClickCategory = () => {
        navigate('/Catageory');
    }

    const onClickProduct = () => {
        navigate('/Product');
    }
    const onClickAdd = () => {
        navigate('/AddCatagory');
    }
    const onClickEdit = () => {
        navigate('/EditCategory/:id');
    }


    const Filter = (e) => {
        setrecord(users.filter(f => f.name.toLowerCase().includes(e.target.value)))
    }

    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Paper  >
                        <div className="sidebar">
                            <ul >
                                <li onClick={onClickHome} ><Link to="/" style={{ color: 'Black' }}><HomeRoundedIcon style={{ marginRight: '15px' }} /> Home </Link></li>
                                <li onClick={onClickCategory}><Link to="/Catageory" style={{ color: 'Black' }}><QrCodeRoundedIcon style={{ marginRight: '0px' }} /> Category</Link></li>
                                <li onClick={onClickProduct}><Link to="/Product" style={{ color: 'Black' }}><AllInboxSharpIcon style={{ marginRight: '10px' }} /> Product</Link></li>
                            </ul>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={11}>
                    <Paper>
                        <div >
                            <div>
                                <h2> <QrCodeRoundedIcon /> Category</h2>
                                <div style={{ textAlign: 'right', color: 'red', paddingRight: '20px', marginTop: "0px" }}>
                                    <Button
                                        onClick={onClickAdd}
                                        variant="contained"
                                        style={{
                                            marginTop: "0px",
                                            borderRadius: "30px",
                                            width: "100px", marginTop: "20px",
                                            color: "white",
                                            backgroundColor: "#7130a6",
                                        }}

                                    >
                                        <b>AddNew</b>
                                    </Button>

                                </div>
                                <input
                                    type='text'
                                    style={{
                                        width: '400px', // Adjust the width as needed
                                        height: '30px', // Adjust the height as needed
                                        marginLeft: '200px',
                                    }}
                                    className='form-control'
                                    onChange={(e) => { Filter(e) }}
                                    placeholder='Search'
                                />
                                <br></br>
                                <br></br>

                                <table style={{ justifyContent: "center", alignItems: "center", }} className="table table-bordered">
                                    <thead className="thread-dark">
                                        <tr style={{ backgroundColor: '#eff7a6' }}>
                                            <th scope="col" >Id</th>
                                            <th scope="col" >Name</th>
                                            <th scope="col" >Description</th>
                                            <th scope="col" >Status</th>
                                            <th scope="col" >Edit</th>
                                            <th scope="col" >Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ justifyContent: "center", alignItems: "center", }}>
                                        {record.map((user, index) => (
                                            <tr style={{ justifyContent: "center", alignItems: "center", }}>
                                                <th scope='row'>{index + 1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td style={{ color: user.email === "InActive" ? 'red' : 'green' }}>{user.email}</td>
                                                <td><Link to={`/EditCategory/${user.id}`}><EditIcon /></Link></td>
                                                <td><Link onClick={() => onClickDelete(user.id)}> <DeleteIcon style={{ color: 'red' }} /></Link></td>

                                            </tr>
                                        ))}
                                        {/* 
<tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>ddd</td>
    </tr> */}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Category
