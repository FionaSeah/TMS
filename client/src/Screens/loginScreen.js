import { TextField, Box, Button, Container } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <Container
        maxWidth="sm"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
          marginTop: "150px",
          padding: "70px",
        }}
      >
        <h1
          style={{
            marginBottom: "50px",
            textAlign: "center",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Task Management System
        </h1>
        sx={{ color: "action.active", mr: 2, my: 2 }}sx={{ color: "action.active", mr: 2, my: 2 }}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "50px",
          }}
        >
          <LockIcon sx={{ color: "action.active", mr: 2, my: 2 }} />
          <TextField
            fullWidth
            id="passwordInput"
            label="Password"
            variant="outlined"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "20px",
          }}
        >
          <Button fullWidth variant="contained">
            <LoginIcon sx={{ color: "white", my: 1, mr: 1 }} /> Login
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default LoginScreen;
