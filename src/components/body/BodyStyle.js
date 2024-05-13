import { styled, Box, Typography } from "@mui/material";

export const BoxContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(186, 223, 255, 0.2))",
    height: "600px",
}));

export const BoxForm = styled(Box)(({ theme }) => ({
    maxHeight: "auto",
    maxWidth: "1500px",
    margin: "200px auto",
    textAlign: "center",
}));

export const BoxAlurPelaksanaan = styled(Box)(({ theme }) => ({
    maxHeight: "auto",
    justifyContent: "center",
    marginTop: "100px",
    textAlign: "center",
}));

export const BoxFAQ = styled(Box)(({ theme }) => ({
    maxHeight: "auto",
    justifyContent: "center",
    marginTop: "100px",
    textAlign: "center",
}));

export const LittleTitleBoxFAQ = styled(Typography)(({ theme }) => ({
    padding: "20px",
    textAlign: "left",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#004581",
}));

export const LittleTitleNumberBoxFAQ = styled(Typography)(({ theme }) => ({
    padding: "0 0 0 20px",
    textAlign: "left",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "normal",
    color: "#004581",
}));

export const BoxTataCaraUpload = styled(Box)(({ theme }) => ({
    maxHeight: "auto",
    justifyContent: "center",
    marginTop: "100px",
    textAlign: "center",
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    fontSize: "38px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    color: "#004581",
}));

export const TitleLittleText = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "180.5%",
    letterSpacing: "0.027px",
    color: "rgba(0, 0, 0, 0.6)",
}));

export const LittleBoxTataCaraUpload = styled(Typography)(({ theme }) => ({
    margin: "10px auto",
    textAlign: "left",
    alignItems: "center",
    height: "auto",
    border: "2px solid #004581",
    borderRadius: "20px",
}));

export const LittleTitleBoxTataCaraUpload = styled(Typography)(({ theme }) => ({
    padding: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#004581",
}));

export const BoxPelaksanaan = styled(Typography)(({ theme }) => ({
    padding: "20px",
    width: "800px",
    height: "100px",
    border: "2px solid #004581",
    borderRadius: "20px",
}));

export const TitleBoxPelaksanaan = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    color: "#004581",
}));

export const LittleTitleBoxPelaksanaan = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#004581",
}));