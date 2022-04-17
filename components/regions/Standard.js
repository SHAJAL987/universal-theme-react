import React from "react";
import Paper from "@mui/material/Paper";
import { CardContent } from "@mui/material";
import { Box } from "@mui/system";

const Standard = (props) => {
  const { title } = props;
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
        hello
      </Box>
    </CardContent>
  );
};

export default Standard;
