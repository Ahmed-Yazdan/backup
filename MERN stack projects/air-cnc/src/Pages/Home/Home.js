import { Grid } from '@mui/material';
import React from 'react';
import SearchBox from '../../Components/Home/SearchBox/SearchBox';
import Services from '../../Components/Home/Services/Services';
import Navbar from '../../Components/Navbar/Navbar';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Grid container spacing={8} sx={{my:3}}>
                    <Grid item xs={12} md={4} style={{paddingTop:"0px"}}>
                        <SearchBox />
                    </Grid>
                    <Grid item xs={12} md={8} style={{paddingTop:"0px"}}>
                        <Services />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;