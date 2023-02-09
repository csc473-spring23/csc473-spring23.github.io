import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import { Link } from "spectacle";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";

export default function Index() {
  return (
    <>
      <p>This is the website for CSC 473 at CCNY in Spring 2023.</p>

      <TableContainer component={Paper}>
        <Table aria-label="time-location-table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Class</TableCell>
              <TableCell>Thursdays 6.30-9pm</TableCell>
              <TableCell>
                Usually Zoom
                <br />
                or Shephard 308
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Office Hours</TableCell>
              <TableCell>Modays 7-8pm (or by appointment)</TableCell>
              <TableCell>Zoom</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div
        css={css`
          margin-top: 5px;
        `}
      >
        <Link href="https://cuny907-my.sharepoint.com/:f:/g/personal/sebastian_csar20_login_cuny_edu/EjE8br-tFYhKj3VHVhx0H7gBnWoeOuI6nLui9DbLENjPaA?e=U5Gvpz">
          <Typography>Class OneDrive</Typography>
        </Link>
      </div>
    </>
  );
}
