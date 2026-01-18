import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PORTFOLIO
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About Me
          </Button>
          <Button component={Link} to="/background" color="inherit">
            Background
          </Button>
          <Button component={Link} to="/projects" color="inherit">
            Projects
          </Button>
          <Button component={Link} to="/credentials" color="inherit">
            Credentials
          </Button>
          <Button component={Link} to="/gallery" color="inherit">
            Gallery
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
