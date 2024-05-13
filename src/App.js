import React from "react";
import { Container, ThemeProvider } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/ScrollTop";
import theme from "./components/theme/theme";

function App() {
  document.title = "Welly Mandiri"

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          background: "#ffff",
        }}
      >
        <Navbar />
        <Body />
        <Footer />
        <ScrollTop />
      </Container>
    </ThemeProvider>
  );
}

export default App;
