import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Service = ({ service, type }) => {

    const { name, tag, price, rating, location } = service;

    if (type === "experiences") {
        return (
            service.type === "experiences" &&
            <Card style={{ textAlign: "start" }} sx={{ maxWidth: 200, maxHeight: 230, mx:2 }}>
                <CardMedia
                    component="img"
                    height="100"
                    width="100%"
                    image="https://1.bp.blogspot.com/-ysovcxw_Szw/YFhGajIirkI/AAAAAAAAFg8/od4MdJcD0sYPBqkd3KWeTGxCLtmfxlD1ACLcBGAsYHQ/s320/coxsbaza-development.jpg"
                    alt="image of hotel/place"
                />
                <CardContent>
                    <Typography style={{lineHeight:"14px"}} gutterBottom variant="caption" display="block" >
                        {tag}
                    </Typography>
                    <Typography variant="subtitle2" component="div" style={{lineHeight:"14px", fontWeight:600}}>
                        {name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        ${price} per person
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Rating name="read-only" value={rating.stars} readOnly size="small" />
                        <Typography variant="body2">
                            {rating.rateCount}
                        </Typography>
                    </div>
                </CardContent>
            </Card>

        );
    };

    if (type = "homes") {
        return (
            service.type === "homes" &&
            <Card style={{ textAlign: "start" }} sx={{ width: 200, maxHeight: 230, mx:2 }}>
                <CardMedia
                    component="img"
                    height="100"
                    width="100%"
                    image="https://1.bp.blogspot.com/-ysovcxw_Szw/YFhGajIirkI/AAAAAAAAFg8/od4MdJcD0sYPBqkd3KWeTGxCLtmfxlD1ACLcBGAsYHQ/s320/coxsbaza-development.jpg"
                    alt="image of hotel/place"
                />
                <CardContent>
                    <Typography gutterBottom variant="caption" display="block" >
                        {tag}
                    </Typography>
                    <Typography variant="subtitle2" component="div" style={{lineHeight:"14px", fontWeight:600}}>
                        {name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        ${price} per person
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Rating name="read-only" value={rating.stars} readOnly size="small" />
                        <Typography variant="body2">
                            {rating.rateCount}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        );
    }
};

export default Service;