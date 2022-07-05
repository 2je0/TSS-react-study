import React from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
const NavigationBar = () => {
  return (
    <Container style={{ border: "solid", height: "70px" }}>
      <div style={{ margin: "auto auto" }}>
        <NavLink to='/'>
          <Button variant='outlined'>HOME</Button>
        </NavLink>
        <NavLink to='/intro'>intro</NavLink>
      </div>
    </Container>
  );
};

export default NavigationBar;
const Bar = styled.div`
  background-color: #ffffff36;
  width: 20px;
  border: solid;
`;
