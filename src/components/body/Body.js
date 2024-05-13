import React from "react";
import {
    BoxContainer,
    BoxForm,
    BoxAlurPelaksanaan,
    BoxFAQ,
    BoxTataCaraUpload,
    TitleText,
    TitleLittleText,
    LittleTitleBoxFAQ,
    LittleTitleNumberBoxFAQ,
    BoxPelaksanaan,
    TitleBoxPelaksanaan,
    LittleTitleBoxPelaksanaan,
    LittleBoxTataCaraUpload,
    LittleTitleBoxTataCaraUpload
} from "./BodyStyle";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ThemeProvider,
    useMediaQuery
} from "@mui/material";
import theme from "../theme/theme";

function Body() {
    document.title = "CV. Welly Mandiri";

    const isMobile = useMediaQuery("(max-width: 500px)");

    const listGambar = [
        {
            number: '1',
            imgSrc: 'assets/Gambar/Gambar-1.jpg',
        },
        {
            number: '2',
            imgSrc: 'assets/Gambar/Gambar-2.jpg',
        },
        {
            number: '3',
            imgSrc: 'assets/Gambar/Gambar-3.jpg',
        },
        {
            number: '4',
            imgSrc: 'assets/Gambar/Gambar-4.jpg',
        },
        {
            number: '5',
            imgSrc: 'assets/Gambar/Gambar-5.jpg',
        },
        {
            number: '6',
            imgSrc: 'assets/Gambar/Gambar-6.jpg',
        },
        {
            number: '7',
            imgSrc: 'assets/Gambar/Gambar-7.jpg',
        },
        {
            number: '8',
            imgSrc: 'assets/Gambar/Gambar-8.jpg',
        },
        {
            number: '9',
            imgSrc: 'assets/Gambar/Gambar-9.jpg',
        },
        {
            number: '10',
            imgSrc: 'assets/Gambar/Gambar-10.jpg',
        },
        {
            number: '11',
            imgSrc: 'assets/Gambar/Gambar-11.jpg',
        },
        {
            number: '12',
            imgSrc: 'assets/Gambar/Gambar-12.jpg',
        },
        {
            number: '13',
            imgSrc: 'assets/Gambar/Gambar-13.jpg',
        },
        {
            number: '14',
            imgSrc: 'assets/Gambar/Gambar-14.jpg',
        },
        {
            number: '15',
            imgSrc: 'assets/Gambar/Gambar-15.jpg',
        },
        {
            number: '16',
            imgSrc: 'assets/Gambar/Gambar-16.jpg',
        },
        {
            number: '17',
            imgSrc: 'assets/Gambar/Gambar-17.jpg',
        },
        {
            number: '18',
            imgSrc: 'assets/Gambar/Gambar-18.jpg',
        },
        {
            number: '19',
            imgSrc: 'assets/Gambar/Gambar-19.jpg',
        },
        {
            number: '20',
            imgSrc: 'assets/Gambar/Gambar-20.jpg',
        },
        {
            number: '21',
            imgSrc: 'assets/Gambar/Gambar-21.jpg',
        },
        {
            number: '22',
            imgSrc: 'assets/Gambar/Gambar-22.jpg',
        },
        {
            number: '23',
            imgSrc: 'assets/Gambar/Gambar-23.jpg',
        },
        {
            number: '24',
            imgSrc: 'assets/Gambar/Gambar-24.jpg',
        },
        {
            number: '25',
            imgSrc: 'assets/Gambar/Gambar-25.jpg',
        },
        {
            number: '26',
            imgSrc: 'assets/Gambar/Gambar-26.jpg',
        },
        {
            number: '27',
            imgSrc: 'assets/Gambar/Gambar-27.jpg',
        },
        {
            number: '28',
            imgSrc: 'assets/Gambar/Gambar-28.jpg',
        },
        {
            number: '29',
            imgSrc: 'assets/Gambar/Gambar-29.jpg',
        },
        {
            number: '30',
            imgSrc: 'assets/Gambar/Gambar-30.jpg',
        },
        {
            number: '31',
            imgSrc: 'assets/Gambar/Gambar-31.jpg',
        },
        {
            number: '32',
            imgSrc: 'assets/Gambar/Gambar-32.jpg',
        },
        {
            number: '33',
            imgSrc: 'assets/Gambar/Gambar-33.jpg',
        },
        {
            number: '34',
            imgSrc: 'assets/Gambar/Gambar-34.jpg',
        },
        {
            number: '35',
            imgSrc: 'assets/Gambar/Gambar-35.jpg',
        },
        {
            number: '36',
            imgSrc: 'assets/Gambar/Gambar-36.jpg',
        },
        {
            number: '37',
            imgSrc: 'assets/Gambar/Gambar-37.jpg',
        },
        {
            number: '38',
            imgSrc: 'assets/Gambar/Gambar-38.jpg',
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <BoxContainer>
                <BoxForm>
                    <Grid container
                        spacing={2}
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img style={{
                                width: "100%",
                                maxWidth: "600px",
                            }}
                                alt=""
                                src="/assets/Gambar/Owner-1-edit.jpg" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <TitleText>CV. Welly Mandiri</TitleText>
                            <TitleLittleText sx={{ margin: "20px 0 20px 0" }}>Tekan tombol di bawah untuk menuju ke alamat</TitleLittleText>

                            <Button variant="contained" disableElevation href="https://maps.app.goo.gl/TMEpYxm59YQZzeff7" target="_blank"
                                sx={{
                                    boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.06)",
                                    height: "45px",
                                    width: "200px",
                                    fontSize: "18px",
                                    color: "white",
                                    backgroundColor: "#F7941D",
                                    borderRadius: 8,
                                    textTransform: "none",
                                    margin: "0 auto",
                                }}>
                                Tekan Disini
                            </Button>
                        </Grid>
                    </Grid>
                </BoxForm>
            </BoxContainer>
            <BoxFAQ>
                <Grid container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <TitleText sx={{ margin: "50px 0 10px 0" }}>GALLERY</TitleText>
                        <Divider
                            style={{
                                backgroundColor: "#004581",
                                height: 5,
                                width: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box>
                            <ImageList variant="masonry" cols={3} gap={8}>
                                {listGambar.map((gambar, i) => (
                                    <ImageListItem key={i}>
                                        <img
                                            srcSet={`${gambar.imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${gambar.imgSrc}?w=248&fit=crop&auto=format`}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>

                        {/* <Box
                            sx={{
                                display: 'grid',
                                maxWidth: isMobile ? "350px" : "1230px",
                                gridTemplateColumns: { md: '1fr 1fr 1fr' },
                                gap: 6,
                            }}>
                            {listGambar.map((gambar, i) => (
                                <Card key={i} elevation={0} square={true} style={{ background: "none", height: "100%" }}>
                                    <CardMedia component='div'>
                                        {gambar.imgSrc && (
                                            <Box style={{ alignItems: 'center', }}>
                                                <img
                                                    style={{
                                                        maxWidth: "100%",
                                                    }}
                                                    alt="" src={gambar.imgSrc} />
                                            </Box>
                                        )}
                                    </CardMedia>
                                </Card>
                            ))}
                        </Box> */}
                    </Grid>
                </Grid>
            </BoxFAQ>
        </ThemeProvider>
    );
}

export default Body;