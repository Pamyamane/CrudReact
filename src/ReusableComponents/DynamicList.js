import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {Card,} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function Dynamiclist({ ItemList, clickAssign, HeaderArray }) {
    return (
      <div>
        <TableContainer component={Card}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#eff7a6" }}>
                {HeaderArray.map((item, i) => (
                  <TableCell
                    key={i}
                    sx={{ textTransform: "capitalize" }}
                    align="center"
                  >
                    <b>{item.Header}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ItemList.map((item) => (
                <TableRow key={item.Id} sx={{ backgroundColor: '#e2e3de' }}>
                  <TableCell sx={{ textTransform: "capitalize" }} align="center">
                    {item.Text1}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }} align="center">
                    {item.Text2}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }} align="center">
                    {item.Text3}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }} align="center" style={{ color: item.Text4 === "Active" ? 'green' : 'red' }}>
                    {item.Text4}
                  </TableCell>
  
                  <TableCell sx={{ textTransform: "capitalize" }} align="center">
                    <EditIcon onClick={() => clickAssign(item.Id)} titleAccess="Edit"/>
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }} align="center">
                    <DeleteIcon onClick={() => clickAssign(item.Id)} titleAccess="Delete"/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  
  export default Dynamiclist;
  