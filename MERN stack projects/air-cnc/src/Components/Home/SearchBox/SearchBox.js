import React from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, action) {
    return { name, action };
}

const rows = [
    createData('Adults', "- +"),
    createData('Child', "- +"),
    createData('Babies', "- +")
];

const SearchBox = () => {
    return (
        <Box style={{textAlign:"start"}}>
            <Typography style={{ textAlign: "start" }} variant="h6">
                Where do you want to go?
            </Typography>
            <Grid container>
                <Grid style={{ boxShadow: "1px 1px 1px 1px skyblue", borderRadius:"7px" }} item xs={12} sx={{my:2}}>
                    <Typography>Location</Typography>
                    <Typography>Add city, landmark or area</Typography>
                </Grid>
                <Grid container style={{ width:"100%", }} item xs={12} sx={{my:2}}>
                    <Grid style={{ boxShadow: "1px 1px 1px 1px skyblue", borderRadius:"7px", width:"45%" }} item xs={6}>
                        <Typography>Arrival</Typography>
                        <Typography>12/12/2022</Typography>
                    </Grid>
                    <Grid style={{ boxShadow: "1px 1px 1px skyblue", borderRadius:"7px", padding:"10px" }} item xs={6}>
                        <Typography>Arrival</Typography>
                        <Typography>12/12/2022</Typography>
                    </Grid>
                </Grid>
                <Grid style={{ boxShadow: "1px 1px 1px 1px skyblue", borderRadius:"7px"}} item xs={12} sx={{my:2}} >
                    <TableContainer style={{ width: "100%" }} component={Paper}>
                        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Guests</TableCell>
                                    <TableCell align="right"> {`>`} </TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.action}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid style={{ boxShadow: "1px 1px 1px 1px skyblue", borderRadius:"7px" }} item xs={12}  sx={{my:2}}>
                    <Button variant="contained" style={{ width: "100%", height: "100%" }}>Search</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SearchBox;