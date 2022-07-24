import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Grid } from '@mui/material';

const Search = () => {
    const defaultProps = {
        center: {
            lat: 26.675200,
            lng: 85.166801
        },
        zoom: 11
    };
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                hello
            </Grid>
            <Grid item xs={12} md={6}>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default Search;