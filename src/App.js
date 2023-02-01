import { useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";
import Topbar from "./pages/global/Topbar";
import SMTP from "./pages/smtp";
import Projects from "./pages/projects";
import Assignment from "./pages/assignment";
import Client_Details from "./pages/client_details";
import Dashboard from "./pages/dashboard";
const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <div className="whole">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/client_details" element={<Client_Details />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/assignment" element={<Assignment />} />
                <Route path="/smtp" element={<SMTP />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
