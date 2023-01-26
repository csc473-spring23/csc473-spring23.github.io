import React from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../components/navbar";

function Root() {
  return (
    <>
      <Navbar />
      <Container>
        <Box flexGrow={1} marginTop="10px">
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Root;
