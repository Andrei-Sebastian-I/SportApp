import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Checkbox } from "@material-ui/core";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(0),
    overflowX: "auto"
  },
  header: {
      backgroundColor: "black",
      
  },
  headerCell: {
    color: "white",
    padding: 0,
    // flexDirection: "column",
},
  checkbox: {
    color: "white",
    // padding: 0,
},
  table: {
    minWidth: 350
  },
  selectTableCell: {
    width: 60,
    // padding: 5,
    // padding: 0,
  },
  tableCell: {
    width: 130,
    height: 40,
    padding: 5,
  },
  input: {
    width: 130,
    height: 40
  }
}));

const data = [
    {
        id: 0,
        name: "1Shane Steward",
        email:  "samantha.kennedy@example.com",
        owned: 'Biking Club, Running Club,.. +3'
    },
    {
      id: 1,
      name: "1Shane Steward",
      email:  "samantha.kennedy@example.com",
      owned: 'Biking Club, Running Club,.. +3'
  },
    {
      id: 2,
      name: "1Shane Steward",
      email:  "samantha.kennedy@example.com",
      owned: 'Biking Club, Running Club,.. +3'
  },
{
  id: 3,
  name: "1Shane Steward",
  email:  "samantha.kennedy@example.com",
  owned: 'Biking Club, Running Club,.. +3'
},
{
  id: 4,
  name: "1Shane Steward",
  email:  "samantha.kennedy@example.com",
  owned: 'Biking Club, Running Club,.. +3'
},
{
  id: 5,
  name: "1Shane Steward",
  email:  "samantha.kennedy@example.com",
  owned: 'Biking Club, Running Club,.. +3'
},
{
  id: 6,
  name: "1Shane Steward",
  email:  "samantha.kennedy@example.com",
  owned: 'Biking Club, Running Club,.. +3'
},
{
  id: 7,
  name: "1Shane Steward",
  email:  "samantha.kennedy@example.com",
  owned: 'Biking Club, Running Club,.. +3'
},
{
  id: 8,
  name: "1Shane Steward",
  email:  "samantha.kennedy@example.com",
  owned: 'Biking Club, Running Club,.. +3'
},
{
  id: 9,
  name: "1Shane Steward",
  email:  "samantha.kennedy@example.com",
  owned: 'Biking Club, Running Club,.. +3'
},

]

export const CoachesTable = () => {
  const rowsPerPage = 7;
  const [rowsArray, setRowsArray] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [page, setPage] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    setCoaches([...data])
    setRowsArray(getElementsForPage(data));
  }, [0]);

  const getElementsForPage = (array, page=1, rows=7) => {
    return array.slice((page - 1) * rows,  page * rows).map(el => ({...el, checked: false}));
  }

  const handleChange = (event, value) => {
    setRowsArray(getElementsForPage(coaches, value));
    setPage(value);
  };

  const handleDeleteElement = (element) => {
    const array = [...coaches];
    const index = array.findIndex(el => el.id === element.id);
    if (index > -1) {
      array.splice(index, 1); 
    }
    setCoaches(array);
    setRowsArray(getElementsForPage(array, page));
  }

  return (
    <div>
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead className={classes.header}>
          <TableRow>
          <TableCell padding="checkbox" className={classes.headerCell}>
                    <Checkbox
                        color="inherit"
                        className={classes.checkbox}
                        // labelStyle={{color: 'white'}}
                        // iconStyle={{fill: 'white'}}
                        // onChange={onSelectAllClick}
                        // inputProps={{
                        // 'aria-label': 'select all desserts',
                        // }}
                        onChange={(e) =>{
                          // const array = [...rowsArray].map(el => {
                          //   el.id === row.id && (el.checked = !el.checked);
                          //   return el; 
                          // });
                          // setRowsArray(array);
                          console.log(e)
                        }}
                    />
                </TableCell>
            <TableCell className={classes.headerCell} align="left">First & Last Name</TableCell>
            <TableCell className={classes.headerCell} align="left">Email Adress</TableCell>
            <TableCell className={classes.headerCell} align="left">Owned Clubs</TableCell>
            <TableCell className={classes.headerCell} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rowsArray.map((row, index) => (
            <TableRow key={row.id}>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        checked={row.checked}
                        onChange={() =>{
                          const array = [...rowsArray].map(el => {
                            el.id === row.id && (el.checked = !el.checked);
                            return el; 
                          });
                          setRowsArray(array);
                        }}
                    />
                </TableCell>
                <TableCell align="left" className={classes.tableCell}>
                    { row.name}
                 </TableCell>
                 <TableCell align="left" className={classes.tableCell}>
                    { row.email}
                 </TableCell>
                 <TableCell align="left" className={classes.tableCell}>
                    { row.owned}
                 </TableCell>
               <TableCell align="center" className={classes.selectTableCell}>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteElement(row)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteElement(row)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Stack spacing={2} style={{marginTop: "20px"}}>
      <Pagination count={Math.ceil(coaches.length / rowsPerPage)} variant="outlined" shape="rounded" page={page} onChange={handleChange}/>
    </Stack>
    </div>
  );
}

