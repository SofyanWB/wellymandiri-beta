import React from "react";
import { BoxContainer } from "./FooterStyle";
import { Divider, ThemeProvider, Typography } from "@mui/material";
import theme from "../theme/theme";

function Footer() {
    
    return (
        <ThemeProvider theme={theme}>
            <BoxContainer>
                <Divider />
                <Typography sx={{ fontSize: "13px", margin: "10px" }}>
                    © Hak Cipta 2024 Welly Mandiri.
                </Typography>
            </BoxContainer>
        </ThemeProvider>
    );
}

export default Footer;