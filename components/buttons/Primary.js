import { Button } from "@mui/material";
import React from "react";

const Primary = (props) => {
  const { text, size, variant, onClick, direction, ...others } = props;
  return (
    <Button
      variant={variant || "contained"}
      size={size || "large"}
      color="primary"
      onClick={onClick}
      {...others}
      sx={{margin:.5}}
    >
      {text}
    </Button>
  );
};

export default Primary;
