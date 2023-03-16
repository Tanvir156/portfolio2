import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import pic from "./../Pages/man.png";
import DnsIcon from "@mui/icons-material/Dns";
import "./CSS/Navbar.css";
const pages = ["Service", "Portfolio", "Pricing"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const otherCompt1 = document.querySelector(".portfolio");
  const otherCompt2 = document.querySelector(".priceings");
  const otherCompt3 = document.querySelector(".header");
  const handleClick = (index) => {
    if (index === 0) {
      otherCompt3.scrollIntoView({ behavior: "smooth" });
    } else if (index === 1) {
      otherCompt1.scrollIntoView({ behavior: "smooth" });
    } else if (index === 2) {
      otherCompt2.scrollIntoView({ behavior: "smooth" });
    }
  };

  //   const handleClassName = () => {
  //     if (scrollPosition < 636) {
  //       return "navColor";
  //     } else if (scrollPosition > 636 && scrollPosition < 1199) {
  //       return "navColor1";
  //     } else if (scrollPosition > 1199 && scrollPosition < 1866) {
  //       return "navColor2";
  //     } else if (scrollPosition > 1866 && scrollPosition < 2399) {
  //       return "navColor3";
  //     } else if (scrollPosition > 2399 && scrollPosition < 2999) {
  //       return "navColor4";
  //     } else if (scrollPosition > 2999 && scrollPosition < 3666) {
  //       return "navColor5";
  //     } else if (scrollPosition > 3666) {
  //       return "navColor6";
  //     } else {
  //       return "";
  //     }
  //   };
  // className={handleClassName()}
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const backgroundColor = getBackgroundColorFromScrollingComponent();
      setNavbarBackgroundColor(backgroundColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getBackgroundColorFromScrollingComponent = () => {
    const scrollingComponent = document.querySelector(".skill");
    // Get the position of the scrolling component relative to the viewport
    const { top } = scrollingComponent.getBoundingClientRect();
    const { bottom } = scrollingComponent.getBoundingClientRect();

    const otherComponent = document.querySelector(".marker");
    const otherComponent1 = document.querySelector(".portfolio");
    const otherComponent2 = document.querySelector(".portfolio1");
    const otherComponent3 = document.querySelector(".portfolio2");
    const otherComponent4 = document.querySelector(".portfolio3");

    // Get the position of the other component relative to the viewport
    const { top: otherTop, bottom: otherBottom } =
      otherComponent.getBoundingClientRect();
    const { top: otherTop1, bottom: otherBottom1 } =
      otherComponent1.getBoundingClientRect();
    const { top: otherTop2, bottom: otherBottom2 } =
      otherComponent2.getBoundingClientRect();
    const { top: otherTop3, bottom: otherBottom3 } =
      otherComponent3.getBoundingClientRect();
    const { top: otherTop4, bottom: otherBottom4 } =
      otherComponent4.getBoundingClientRect();
    // If the top position is less than or equal to zero, the component is at the top of the viewport
    // If the top position is less than or equal to zero, the component is at the top of the viewport
    // if (top <= 0 && bottom >= 0) {
    //   const styles = window.getComputedStyle(scrollingComponent);
    //   return styles.background;
    // } else if (otherTop <= 0 && otherBottom >= 0) {
    //   const styles1 = window.getComputedStyle(otherComponent);
    //   return styles1.background;
    // } else if (otherTop1 <= 0 && otherBottom1 >= 0) {
    //   const styles1 = window.getComputedStyle(otherComponent1);
    //   return styles1.background;
    // } else if (otherTop2 <= 0 && otherBottom2 >= 0) {
    //   const styles1 = window.getComputedStyle(otherComponent2);
    //   return styles1.background;
    // } else if (otherTop3 <= 0 && otherBottom3 >= 0) {
    //   const styles1 = window.getComputedStyle(otherComponent3);
    //   return styles1.background;
    // } else if (otherTop4 <= 0 && otherBottom4 >= 0) {
    //   const styles1 = window.getComputedStyle(otherComponent4);
    //   return styles1.background;
    // } else return "#701ae0";
  };

  return (
    <AppBar style={{ background: "#701ae0", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DnsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TANVIR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => handleClick(index)}>
                  <Typography textAlign="center" key={index}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TANVIR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                onClick={() => handleClick(index)}
                key={index}
                sx={{ my: 2, color: "black", display: "block" }}
                style={{ color: backgroundColor }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={pic} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
