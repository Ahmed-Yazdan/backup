import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])

    return (
        <Box>
            <Typography style={{textAlign:"start"}}>Experiences</Typography>
            <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                {
                    services.map(service => <Service type="experiences" service={service} />)
                }
            </Box>

            <br />
            <Typography style={{textAlign:"start"}}>Homes</Typography>
            <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                {
                    services.map(service => <Service type="homes" service={service} />)
                }
            </Box>
        </Box>
    );
};

export default Services;