import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ClearAllIcon from "@mui/icons-material/ClearAll";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from "react-router-dom";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
// import AdbIcon from "@mui/icons-material/Adb";
import { pages } from "../App";
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = (props) => {
  const toParent = (isdark) => {
    props.themehandler(isdark);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };
  const history = useHistory();
  const [isdarkTheme, setIsDarkTheme] = React.useState(false);
  return (
    <AppBar position='static' enableColorOnDark={isdarkTheme}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant='h5'
            noWrap
            component='a'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Pacifico",
              fontWeight: 900,
              fontSize: "2rem",
              letterSpacing: ".5rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => {
              history.push("/");
            }}
            style={{ cursor: "pointer" }}>
            TSS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <ClearAllIcon />
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    history.push("/" + page);
                    handleCloseNavMenu();
                  }}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            TSS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  history.push("/" + page);
                }}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label='Dark mode'
              onChange={() => {
                setIsDarkTheme((prev) => {
                  toParent(prev);
                  return !prev;
                });
                // toParent(isdarkTheme);
              }}
            />
          </FormGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
