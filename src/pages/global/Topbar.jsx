import React from "react";
import { Box, IconButton } from "@mui/material";
import { LogoutRounded } from "@mui/icons-material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useProSidebar } from "react-pro-sidebar";
import "./Topbar.css";
const Topbar = () => {
  const { toggleSidebar, broken, rtl } = useProSidebar();
  return (
    <Box display="flex" justifyContent="space-between" p={2} className="topbar">
      <Box display="flex">
        {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <input
          className="inputbase"
          placeholder="Seacrh for something..."
        ></input>
      </Box>
      <button className="toprightbutton">
        <Box display="flex" className="topright">
          <LogoutRounded className="logout" />
          Log out
        </Box>
      </button>
    </Box>
  );
};

export default Topbar;
