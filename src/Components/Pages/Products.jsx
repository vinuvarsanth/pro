import Box from "@mui/material/Box";
import React from "react";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
      </Box>
    </>
  );
}