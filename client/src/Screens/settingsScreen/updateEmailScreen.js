import { TextField, Box, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

function UpdateEmailScreen() {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Update Email Address</h2>
      <hr />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <EmailIcon sx={{ color: "action.active", mr: 2, my: 2 }} />
        <TextField
          autoFocus
          fullWidth
          id="emailInput"
          label="Email Address"
          variant="outlined"
        />
      </Box>
      <Button variant="contained" style={{ width: "100%", height: "50px" }}>
        <ChangeCircleIcon style={{ paddingRight: "5px" }} />
        Update Email
      </Button>
    </div>
  );
}

export default UpdateEmailScreen;
