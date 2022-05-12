import { CardContent } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Title({ children }) {
  return (
    <CardContent
      style={{
        backgroundColor: "#4971B1",
        borderRadius: 5,
        marginBottom: 15,
        padding: 5,
        color: "white",
      }}
    >
      <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      >
        {children}
      </Box>
    </CardContent>
  );
}

export default Title;
