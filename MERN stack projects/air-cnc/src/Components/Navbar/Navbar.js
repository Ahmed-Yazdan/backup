import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <Box style={{ backgroundColor: 'transparent' }} sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: 'transparent', boxShadow: "none", borderBottom: "1px solid #D3D3D3" }} position="static">
                <Toolbar style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
                    <Typography
                        edge="start"
                        sx={{ mr: 2 }}
                        variant="h4"
                        style={{ fontWeight: "bold", color: "#00FF00" }}
                    >
                        AIRCNC
                    </Typography>
                    <Box>
                        <Button edge="end" sx={{ color: "black" }}>Host your home</Button>
                        <Button edge="end" sx={{ color: "black" }}>Host your experience</Button>
                        <Button edge="end" sx={{ color: "black" }}>Help</Button>
                        <Button edge="end" sx={{ color: "black" }}>Login</Button>
                        <Button edge="end" sx={{ color: "black" }}>Sign Up</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;