import React from "react";
//import { useContext } from "react";
//import { ColorModeContext, tokens } from "../../theme";
import {tokens} from "../../theme";
import { useTheme, Box, IconButton, InputBase, Button } from "@mui/material";
import { LogoutRounded } from "@mui/icons-material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useProSidebar } from "react-pro-sidebar";
import './Topbar.css';
import { blue, green, red } from "@mui/material/colors";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //const colorMode = useContext(ColorModeContext);
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
        {/* <Box className="thirdbox"
          // display="flex"
          // backgroundColor={red}
          // p={0.2}
          // borderRadius={1}
          // height={40}
          // color={green}
        >
          <InputBase sx={{ ml: 1, flex: 1,paddingTop:-10}} placeholder="Search for something..." className="searchinput" />
          <IconButton type="button">
          </IconButton>
        </Box> */}
        <input className="inputbase" placeholder="Seacrh for something..."></input>
      </Box>
      <button className="toprightbutton">
      <Box display="flex" className="topright" >
          <LogoutRounded className="logout"/>
          Log out
      </Box>
      </button>
      
    </Box>
  );
};

export default Topbar;
