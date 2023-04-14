import { AppBar, Box, Toolbar, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function NavigationBar() {
  return (
    <Box
      sx={{
        marginLeft: "-10px",
        marginTop: "-10px",
        marginRight: "-8px",
        marginBottom: "100px",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            style={{ marginRight: "20px" }}
            startIcon={<HomeIcon />}
          >
            <h3>Home</h3>
          </Button>
          <Button
            color="inherit"
            style={{ marginRight: "20px" }}
            startIcon={<DashboardIcon />}
          >
            <h3>Kanban</h3>
          </Button>
          <Button
            color="inherit"
            style={{ marginRight: "20px" }}
            startIcon={<ManageAccountsIcon />}
          >
            <h3>Employees</h3>
          </Button>
          <Button
            color="inherit"
            style={{ marginRight: "20px" }}
            startIcon={<SettingsIcon />}
          >
            <h3>Settings</h3>
          </Button>
          <Button
            color="inherit"
            style={{
              float: "right",
              marginRight: "20px",
              backgroundColor: "#B23B3B",
              paddingLeft: "20px",
            }}
            startIcon={<ExitToAppIcon />}
          >
            <h3>Logout</h3>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationBar;
