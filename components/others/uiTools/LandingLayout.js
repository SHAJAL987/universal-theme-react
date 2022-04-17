import React from "react";
import Layout from "../uiTools/Layout";

const LandingLayout = (props) => {
  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  );
};

export default LandingLayout;
