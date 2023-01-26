import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <Link component={RouterLink} to="/">
            <Typography
              variant="h6"
              sx={{ color: "#ffffff" }}
              noWrap
              component="div"
            >
              CSC 473
            </Typography>
          </Link>
        </Box>
        <Box sx={{ padding: "10px", flexGrow: 1 }}>
          <Link component={RouterLink} to="/resources">
            <Typography sx={{ color: "#ffffff" }}>Resources</Typography>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Link
            href="http://github.com/csc473-spring23/csc473-spring23.github.io"
            aria-label="Go to the github repo"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
