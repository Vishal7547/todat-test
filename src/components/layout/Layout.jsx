import React from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box
        sx={{
          marginLeft: 8,
          marginTop: 10,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
