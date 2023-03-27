import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SxProps, Theme, useTheme } from "@mui/material/styles";

interface NavBoxProps {
  sx?: SxProps<Theme>;
  variant?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | undefined;
  to?: string;
  href?: string;
}

function NavBox(props: PropsWithChildren<NavBoxProps>) {
  const theme = useTheme();

  const linkProps = props.to
    ? { to: props.to, component: RouterLink }
    : { href: props.href };

  return (
    <Box sx={{ padding: "10px", ...props.sx }}>
      <Link {...linkProps}>
        <Typography
          variant={props.variant}
          sx={{ color: theme.palette.primary.contrastText }}
        >
          {props.children}
        </Typography>
      </Link>
    </Box>
  );
}

export default function Navbar() {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <NavBox variant="h6" to="/">
          CSC 473
        </NavBox>
        <NavBox to="/resources">Resources</NavBox>
        <NavBox to="/reading">Reading</NavBox>
        <NavBox to="/slides">Slides</NavBox>
        <NavBox to="/final-project" sx={{ flexGrow: 1 }}>
          Final Project
        </NavBox>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Link
            href="http://github.com/csc473-spring23/csc473-spring23.github.io"
            aria-label="Go to the github repo"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <GitHubIcon />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
