import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PageHeader from "../components/others/uiTools/PageHeader";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StandardRegion from "../components/regions/Standard";

const test = () => {
  return (
    <>
      <PageHeader 
        title="This is Page Header"
        subTitle = "This is Sub-Title"
        icon = {<AccountBalanceIcon />}
      />
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {/* <StandardRegion /> */}
      </Box>
    </>
  );
};

export default test;
