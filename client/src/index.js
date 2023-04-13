import React from "react";
import ReactDOM from "react-dom/client";
// import LoginScreen from "./Screens/loginScreen";
// import HomeScreen from "./Screens/homeScreen";
// import SettingsNavigationBar from "./Components/settingsNavigationBar";
import UpdatePasswordScreen from "./Screens/settingsScreen/updatePasswordScreen";
// import UpdateEmailScreen from "./Screens/settingsScreen/updateEmailScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <LoginScreen /> */}
    {/* <HomeScreen /> */}
    {/* <SettingsNavigationBar /> */}
    <UpdatePasswordScreen />
    {/* <UpdateEmailScreen /> */}
  </React.StrictMode>
);
