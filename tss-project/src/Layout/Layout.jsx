import React, { useState } from "react";
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
const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#5a6990",
    },
  },
});

const Layout = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(darkTheme);
  const changeTheme = (isdark) => {
    if (isdark) setIsDarkTheme(darkTheme);
    else setIsDarkTheme(blueTheme);
  };
  return (
    <LayoutContainer>
      <ThemeProvider theme={isDarkTheme}>
        <ResponsiveAppBar themehandler={changeTheme} />
        <Container>{props.children}</Container>
      </ThemeProvider>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div``;
