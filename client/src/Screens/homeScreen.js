import { Box, Card, Container, Stack } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import NavigationBar from "../Components/navigationBar";

const settingsCard = (
  <div>
    <SettingsIcon
      style={{ fontSize: "40px", marginBottom: "-10px", marginTop: "10px" }}
    />
    <h3
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "18px",
      }}
    >
      Settings
    </h3>
  </div>
);

const kanBanCard = (
  <div>
    <DashboardIcon
      style={{ fontSize: "40px", marginBottom: "-10px", marginTop: "10px" }}
    />
    <h3
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "18px",
      }}
    >
      Kanban Board
    </h3>
  </div>
);

const manageEmployeeCard = (
  <div>
    <ManageAccountsIcon
      style={{ fontSize: "40px", marginBottom: "-10px", marginTop: "10px" }}
    />
    <h3
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "18px",
      }}
    >
      Employees' Management
    </h3>
  </div>
);

function HomeScreen() {
  return (
    <div>
      <NavigationBar />
      <Box sx={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            marginBottom: "100px",
          }}
        >
          Hello Name
        </h1>
      </Box>
      <Container>
        <Stack spacing={2} direction="row">
          <Card
            variant="outlined"
            style={{
              padding: "10px",
              textAlign: "center",
              flex: 1,
              cursor: "pointer",
            }}
          >
            {kanBanCard}
          </Card>
          <Card
            variant="outlined"
            style={{
              padding: "10px",
              textAlign: "center",
              flex: 1,
              cursor: "pointer",
            }}
          >
            {manageEmployeeCard}
          </Card>
          <Card
            variant="outlined"
            style={{
              padding: "10px",
              textAlign: "center",
              flex: 1,
              cursor: "pointer",
            }}
          >
            {settingsCard}
          </Card>
        </Stack>
      </Container>
    </div>
  );
}

export default HomeScreen;
