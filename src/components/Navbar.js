import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Link from "@mui/material/Link";

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
  window: PropTypes.func,
};

export const Navbar = function (props) {
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
