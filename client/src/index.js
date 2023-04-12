import React from "react";
import ReactDOM from "react-dom/client";
// import LoginScreen from "./Screens/loginScreen";
import HomeScreen from "./Screens/homeScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <LoginScreen /> */}
    <HomeScreen />
  </React.StrictMode>
);
