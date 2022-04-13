import React from "react";
import AppBar from "../uiTools/ResponsiveAppBar";

const LandingLayout = (props) => {
  return (
    <>
      <AppBar />
      <>
        <div style={{ marginTop: "60px" }}>{props.children}</div>
      </>
      
    </>
  );
};

export default LandingLayout;