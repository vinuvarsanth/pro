import Box from "@mui/material/Box";
import React from "react";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
import List from "../Settings/List";
export default function Settings() {
  return (
    <>
     <Navbar/>
    <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="bgcolor">
          <List/>
        </Box>
      </Box>
    </>
  );
}
