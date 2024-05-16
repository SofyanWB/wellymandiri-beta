import React from "react";
import { Box, AppBar } from "@mui/material";

function Navbar() {

    return (
        <AppBar
            elevation={0}
            component="nav"
            sx={{
                position: "fixed",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.06)",
            }}>
            <Box
                sx={{
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <img
                    src='/assets/Logo/WM-Logo.png'
                    alt="Gambar"
                    draggable="false"
                    style={{
                        userDrag: "none",
                        userSelect: "none",

                        width: '100px',
                        height: 'auto',
                    }} />
            </Box>
        </AppBar>
    );
}

export default Navbar;