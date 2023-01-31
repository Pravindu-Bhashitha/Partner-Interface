import React from "react";
import { Box, useTheme } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataContacts } from "../../data/mockData";
import "./index.css";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiFillFolder } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const columns = [
  //   { field: "id", headerName: "Id", width: 100 },
  //   { field: "registrarId", headerName: "Registrar Id", width: 100 },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     cellClassName: "name-column--cell",
  //     width: 200,
  //   },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     headerAlign: "left",
  //     align: "left",
  //     width: 100,
  //   },
  //   { field: "phone", headerName: "Phone Number", width: 100 },
  //   { field: "email", headerName: "Email", width: 200 },
  //   { field: "address", headerName: "Address", width: 250 },
  //   { field: "city", headerName: "City", width: 100 },
  //   { field: "zipCode", headerName: "Zip Code", width: 100 },
  // ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* <Header title="CONTACTS" subtitle="welcome to you Contacts" /> */}
        <h1 className="header">PROJECT</h1>
      </Box>
      <Box
        m="8px 0 0 0"
        width="100%"
        height="80vh"
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {/* <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        /> */}
        <div className="all">
          <div className="firstpart">
            <p className="topcontain">All projects assigned to this account</p>
            <button className="topbutton">Create new project</button>
          </div>
          <div className="secondpart">
            <button className="refresh">
              <HiOutlineRefresh />
              Refresh
            </button>
            <input type="text" placeholder="Search" className="search"></input>
            <button className="go">Go!</button>
          </div>
          {/* <div>
            <table className="table">
              <tr className="row">
                <td className="firstcoloumn">
                  <button className="activestatusbutton">Active</button>
                </td>
                <td className="secondcoloumn">
                  Contract with Zender Company
                  <br />
                  <small>Created 14.08.2014</small>
                </td>
                <td className="thirdcoloumn">
                  <progress value="48" max="100" className="progressbar">
                    {" "}
                    32%{" "}
                  </progress>
                </td>
                <td className="fourthcoloumn">gffgsgfiagfsduhfgsdg</td>
              </tr>
              <tr className="row">
                <td className="firstcoloumn">
                  <button className="activestatusbutton">Active</button>
                </td>
                <td className="secondcoloumn">
                  Contract with Zender Company
                  <br />
                  <small>Created 14.08.2014</small>
                </td>
                <td className="thirdcoloumn">jhgfdhfgdshug</td>
                <td className="fourthcoloumn">gffgsgfiagfsduhfgsdg</td>
              </tr>
            </table>
          </div> */}
          <div>
            <div className="thirdpart">
              <label className="activestatusbutton">Active</label>
              <div className="secondcol">
                Contract with Zender Company
                <br />
                <small>Created 14.08.2014</small>
              </div>
              <div className="thirdcol">
                <div className="both">
                  <small>Completion With:48%</small>
                  <br />
                  <progress value="48" max="100" className="progressbar">
                    {/* {" "}
                    32%{" "} */}
                  </progress>
                </div>
              </div>
              <div className="fourthcol">
                <div className="viewdiv">
                  <button className="view">
                    <AiFillFolder />
                    View
                  </button>
                </div>
                <div className="editview">
                  <button className="edit">
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="thirdpart">
              <label className="activestatusbutton">Active</label>
              <div className="secondcol">
                Contract with Zender Company
                <br />
                <small>Created 14.08.2014</small>
              </div>
              <div className="thirdcol">
                <div className="both">
                  <small>Completion With:48%</small>
                  <br />
                  <progress value="48" max="100" className="progressbar">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="fourthcol">
                <div className="viewdiv">
                  <button className="view">
                    <AiFillFolder />
                    View
                  </button>
                </div>
                <div className="editview">
                  <button className="edit">
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Contacts;
