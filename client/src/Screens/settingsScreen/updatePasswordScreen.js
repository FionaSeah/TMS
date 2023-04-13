import * as React from "react";
import {
  InputAdornment,
  IconButton,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import HttpsIcon from "@mui/icons-material/Https";
import LockClockIcon from "@mui/icons-material/LockClock";

function UpdatePasswordScreen() {
  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownOldPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseDownNewPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Update Password</h2>
      <hr />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <HttpsIcon sx={{ color: "action.active", mr: 2, my: 2 }} />
        <TextField
          fullWidth
          id="oldPasswordInput"
          label="Old Password"
          variant="outlined"
          type={showOldPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowOldPassword}
                  onMouseDown={handleMouseDownOldPassword}
                  edge="end"
                >
                  {showOldPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "20px",
        }}
      >
        <HttpsIcon sx={{ color: "action.active", mr: 2, my: 2 }} />
        <TextField
          fullWidth
          id="newPasswordInput"
          label="New Password"
          variant="outlined"
          type={showNewPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewPassword}
                  onMouseDown={handleMouseDownNewPassword}
                  edge="end"
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "30px",
        }}
      >
        <HttpsIcon sx={{ color: "action.active", mr: 2, my: 2 }} />
        <TextField
          fullWidth
          id="passwordInput"
          label="Confirm New Password"
          variant="outlined"
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Button variant="contained" style={{ width: "100%", height: "50px" }}>
        <LockClockIcon style={{ paddingRight: "5px" }} />
        Update Password
      </Button>
    </div>
  );
}

export default UpdatePasswordScreen;
