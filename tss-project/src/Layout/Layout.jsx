import React from "react";
import styled from "styled-components";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Container from "@mui/material/Container";
const Layout = (props) => {
  return (
    <LayoutContainer>
      <ResponsiveAppBar />
      <Container>{props.children}</Container>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div``;
