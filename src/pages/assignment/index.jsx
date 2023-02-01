import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import "./index.css";
import { WiTime9 } from "react-icons/wi";
const Assignment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h1 className="header1">ASSIGNMENTS</h1>
      </Box>
      <Box
        m="8px 0 0 0"
        height="73vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <div className="Row">
          <div className="first">
            <h3 className="head">To Do</h3>
            <div className="content1">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ''}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
            <div className="content2">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ''}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
            <div className="content3">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ''}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="second">
            <h3 className="head">In Progress</h3>
            <div className="content1">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ''}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
            <div className="content2">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ''}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
            <div className="content3">
              <p>
                Service 1 stopeed - of the printing and typesetting industry
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ''}
                <label class="toggle">
                  <input type="checkbox"></input>
                  <span class="labels" data-on="ON" data-off="OFF"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="third">
            <h3 className="head">Completed</h3>
            <div className="content1">
              <p>
              Sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ''}
              </div>
            </div>
            <div className="content2">
              <p>
              Ut porttitor augue non sapien mollis accumsan. Nulla non elit eget lacus elementum viverra.
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ''}
                <button className="button">Tag</button>
              </div>
            </div>
            <div className="content3">
              <p>
              Which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </p>
              <div className="dateswitch">
                <WiTime9 />
                {new Date().toLocaleString() + ''}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Assignment;
