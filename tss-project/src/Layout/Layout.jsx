import React from "react";
import styled from "styled-components";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
const Layout = (props) => {
  return (
    <LayoutContainer>
      <ThemeProvider theme={darkTheme}>
        <ResponsiveAppBar />
        <Container>{props.children}</Container>
      </ThemeProvider>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div``;
