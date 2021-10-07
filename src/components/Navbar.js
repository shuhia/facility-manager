import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import Link from "@mui/material/Link";

import Paper from "@mui/material/Paper";
import AccountMenu from "./Account";
import { CustomizedMenus } from "./Menu";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import PropTypes from "prop-types";

import useScrollTrigger from "@mui/material/useScrollTrigger";

import Slide from "@mui/material/Slide";

const theme = createTheme({
  palette: {
    primary: { main: "#fffff" },
    accent: { main: orange[500] },
  },
  typography: {
    fontFamily: ["lato"],
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export const Navbar = function (props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, height: "80px" }}>
        <HideOnScroll {...props}>
          <AppBar position="fixed">
            <Toolbar
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <Link href="home" underline="hover" color="black">
                  Home
                </Link>
                <Link href="/facilities" underline="hover" color="orange">
                  Facilities
                </Link>
                <Link href="/tournaments" underline="hover" color="black">
                  Tournaments
                </Link>
                <Link href="/my/tournaments" underline="hover" color="black">
                  My Tournaments
                </Link>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Link href="/">
                  <Logo></Logo>
                </Link>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  marginLeft: "auto",
                  alignItems: "center",
                }}
              >
                <CustomizedMenus></CustomizedMenus>
                <AccountMenu></AccountMenu>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
    </ThemeProvider>
  );
};
