import * as React from "react";
import {
  OutlinedInput,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockResetIcon from "@mui/icons-material/LockReset";

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
      <h2>Update Password</h2>
      <hr />
      <FormControl
        sx={{ width: "100%", marginBottom: "20px", marginTop: "10px" }}
        variant="outlined"
      >
        <InputLabel htmlFor="oldPassword">Old Password</InputLabel>
        <OutlinedInput
          id="oldPassword"
          autoFocus
          type={showOldPassword ? "text" : "password"}
          endAdornment={
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
          }
          label="Password"
        />
      </FormControl>
      <FormControl
        sx={{ width: "100%", marginBottom: "20px" }}
        variant="outlined"
      >
        <InputLabel htmlFor="newPassword">New Password</InputLabel>
        <OutlinedInput
          id="newPassword"
          type={showNewPassword ? "text" : "password"}
          endAdornment={
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
          }
          label="Password"
        />
      </FormControl>
      <FormControl
        sx={{ width: "100%", marginBottom: "20px" }}
        variant="outlined"
      >
        <InputLabel htmlFor="newPassword">Confirm Password</InputLabel>
        <OutlinedInput
          id="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          endAdornment={
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
          }
          label="Password"
        />
      </FormControl>
      <Button variant="contained" style={{ width: "100%", height: "50px" }}>
        <LockResetIcon style={{ paddingRight: "5px" }} />
        Update Password
      </Button>
    </div>
  );
}

export default UpdatePasswordScreen;
